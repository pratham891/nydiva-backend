import { Schema, model } from 'mongoose';
import { genSalt, hash } from 'bcrypt';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: [{
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash the password before saving the user model
userSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
  }
  next();
});

const User = model('User', userSchema);

export default User;
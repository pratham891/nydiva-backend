import { Schema, model } from 'mongoose';
import { genSalt, hash } from 'bcrypt';

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
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
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
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
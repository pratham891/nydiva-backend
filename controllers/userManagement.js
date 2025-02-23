import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json(user);


  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

const updateAddress = async (req, res) => {
  const { line01, line02, city, state, zip, country } = req.body;

  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const address = {
      line01,
      line02,
      city,
      state,
      zip,
      country
    };

    user.address = [address];
    await user.save();

    res.status(201).json(user.address);

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export { getUser, updateAddress };

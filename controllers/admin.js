import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const adminLogin = (req, res) => {
  const { adminId, password } = req.body;

  if (adminId === process.env.ADMIN_ID && password === process.env.ADMIN_PWD) {
    const payload = {
      admin: {
        id: process.env.ADMIN_ID
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '7d' },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          msg: "Admin login successful",
          token: token
        });
      }
    );
  } else {
    res.status(401).json({ msg: "Invalid credentials" });
  }
};

export { adminLogin };
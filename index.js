import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/connection.js';
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Backend server is running on port ${PORT}`));
});

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/connection.js';
import router from './routes/routes.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api', router);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Backend server is running on port ${PORT}`));
});

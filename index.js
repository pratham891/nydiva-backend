import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/connection.js';
import router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

// increase payload size
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(express.json());
app.use('/api', router);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Backend server is running on port ${PORT}`));
});

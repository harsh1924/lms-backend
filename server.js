import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

// * Initialize Express
const app = express();

// * Connecting to the Database
await connectDB();

// * Middlewares
app.use(cors());

// * Routes
app.get('/', (req, res) => res.send("API is working"));
app.post('/clerk', express.json(), clerkWebhooks);

// * PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT: ${PORT}`);
})
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import router from './src/routes/routes.js';
dotenv.config();

const app = express();
const port = 8080;

// Middleware
app.use(cors(['https://localhost:3000']));
app.use(express.json({ limit: '50mb' }));

// Routes
app.use("/api/v1/", router);

// Root Route
app.get('/', (_req, res) => {
    res.send("Welcome to the Zikhara SaaS - API");
});

// MongoDB Connection
const uri = process.env.MONGO_URL;

if (!uri) {
    console.error("Error: MONGO_URL is not defined in the environment variables.");
    process.exit(1);
}

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 60000
        });
        console.log("Successfully connected to MongoDB!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

connectToDatabase();

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

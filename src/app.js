/**
 * Main application file
 * 
 * This file sets up the Express.js server and connects to MongoDB using Mongoose.
 * It also imports and sets up the routes for the Task API.
 */
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db/index.js";

import taskRoutes from "./routes/taskroutes.js";



/**
 * Load environment variables from .env file
 */
dotenv.config({
    path: "./.env"
});

/**
 * Create Express.js app
 */
const app = express()

/**
 * Enable CORS for development
 */
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

/**
 * Parse JSON and URL-encoded request bodies
 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


 /**
 * Set up routes for the Task API
 */
app.use("",  taskRoutes);

/**
 * Catch all errors and send a 500 response
 */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  });



/**
 * Connect to MongoDB using Mongoose
 */
connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB: ", err.message);
        process.exit(1);
    });



/**
 * Export the Express.js app
 */
export { app }


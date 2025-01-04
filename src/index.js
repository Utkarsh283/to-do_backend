import dotenv from "dotenv"; // Import dotenv to load environment variables
import { app } from "./app.js"; // Import the Express app from app.js
import connectDB from "./db/index.js"; // Import the function to connect to MongoDB

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

// Define the port the server will listen on, defaulting to 8001 if not set in environment variables
const PORT = process.env.PORT || 8001;

// Connect to the MongoDB database
connectDB()
  .then(() => {
    // Start the Express server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    // Log the error and exit the process if the database connection fails
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

// Uncomment the following line to log the MongoDB URI from .env file for debugging purposes
// console.log(`MongoDB URI from .env file: ${process.env.MONGODB_URI}`);


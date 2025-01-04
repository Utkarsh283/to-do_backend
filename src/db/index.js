import mongoose from "mongoose";

// Function to connect to MongoDB
const connectDB = async () => {
  // Retrieve MongoDB URI from environment variables
  const uri = process.env.MONGODB_URI;
  
  // Check if URI is defined
  if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    // Attempt to connect to MongoDB
    const conn = await mongoose.connect(uri);
    // Connection successful
    // console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log error if connection fails
    console.error(`Error connecting to MongoDB: ${error.message}`);
    throw error;
  }
};

// Export the connectDB function for use in other modules
export default connectDB;


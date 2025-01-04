import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Define the schema for the Task model
const taskSchema = new mongoose.Schema(
  {
    // Task title, required field
    title: { type: String, required: true },
    // Task description, required field
    description: { type: String, required: true },
    // Task status, with default value as 'pending'
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    // Refresh token associated with the task
    refreshToken: { type: String },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt timestamps
);

// Export the Task model for use in other modules
export default mongoose.model("Task", taskSchema);


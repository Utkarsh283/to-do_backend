import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" } , 
    refreshToken: { type: String }
    
}, { timestamps: true });



export default mongoose.model("Task", taskSchema);


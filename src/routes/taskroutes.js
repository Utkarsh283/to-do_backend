import express from "express";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/taskController.js";

// Create a new router object
const router = express.Router();

// Route to create a new task
router.post("/tasks", createTask);

// Route to get all tasks
router.get("/tasks", getTasks);

// Route to get a specific task by id
router.get("/tasks/:id", getTaskById);

// Route to update a task by id
router.put("/tasks/:id", updateTask);

// Route to delete a task by id
router.delete("/tasks/:id", deleteTask);

// Export the router object for use in other modules
export default router;


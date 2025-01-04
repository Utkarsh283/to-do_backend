import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        const task = await Task.create({ title, description });

        if (!task) {
            return res.status(500).json({ message: "Failed to create task" });
        }

        res.status(201).json(task);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Error creating task", error: error.message });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error fetching task", error });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { status } = req.body;
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, { status }, { new: true });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error updating task", error });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task", error });
    }
};


/**
 * Creates a new task
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        // Check if title and description are provided
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        // Create a new task
        const task = await Task.create({ title, description });

        // Check if task was created successfully
        if (!task) {
            return res.status(500).json({ message: "Failed to create task" });
        }

        // Return the created task
        res.status(201).json(task);
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Error creating task", error: error.message });
    }
};

/**
 * Retrieves all tasks
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const getTasks = async (req, res) => {
    try {
        // Retrieve all tasks
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error });
    }
};

/**
 * Retrieves a task by id
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const getTaskById = async (req, res) => {
    try {
        // Retrieve a task by id
        const task = await Task.findOne({ _id: req.params.id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error fetching task", error });
    }
};

/**
 * Updates a task
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const updateTask = async (req, res) => {
    try {
        const { status } = req.body;
        // Update a task
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, { status }, { new: true });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error updating task", error });
    }
};

/**
 * Deletes a task
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
export const deleteTask = async (req, res) => {
    try {
        // Delete a task
        const task = await Task.findOneAndDelete({ _id: req.params.id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task", error });
    }
};



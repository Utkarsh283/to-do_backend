import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db/index.js";

import taskRoutes from "./routes/taskroutes.js";



dotenv.config({
    path: "./.env"
})

const app = express()
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


 app.use("",  taskRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  });

connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB: ", err.message);
        process.exit(1);
    });

export { app }


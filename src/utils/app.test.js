import request from "supertest";
import { app } from "../app.js";
import mongoose from "mongoose";

describe("Task API Endpoints", () => {
  let server;

  beforeAll(async () => {
    server = app.listen(4000);
    const url = `mongodb://127.0.0.1/${process.env.DB_NAME}`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
    server.close();
  });

  let taskId;

  it("should create a new task", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: "Test Task", description: "Test Description" });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("_id");
    taskId = response.body._id;
  });

  it("should retrieve all tasks", async () => {
    const response = await request(app).get("/tasks");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should retrieve a task by ID", async () => {
    const response = await request(app).get(`/tasks/${taskId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("_id", taskId);
  });

  it("should update a task's status", async () => {
    const response = await request(app)
      .put(`/tasks/${taskId}`)
      .send({ status: "completed" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("status", "completed");
  });

  it("should delete a task", async () => {
    const response = await request(app).delete(`/tasks/${taskId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message", "Task deleted successfully");
  });

  it("should return 404 for non-existent task", async () => {
    const response = await request(app).get(`/tasks/${taskId}`);

    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty("message", "Task not found");
  });
});


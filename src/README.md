# Todo App

This is a simple Todo application built with Node.js and Express, connected to a MongoDB database.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local or remote instance)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGODB_URI=<your-mongodb-uri>
   CORS_ORIGIN=*
   ```

4. **Run the application:**

   To start the server in development mode with hot-reloading:

   ```bash
   npm run dev
   ```

   To start the server in production mode:

   ```bash
   npm start
   ```

   The server will run on port 8001.

## API Endpoints

- **Create a task:** `POST /tasks`
- **Get all tasks:** `GET /tasks`
- **Get a task by ID:** `GET /tasks/:id`
- **Update a task by ID:** `PUT /tasks/:id`
- **Delete a task by ID:** `DELETE /tasks/:id`

## Testing with Postman

1. **Open Postman** and create a new request.

2. **Set the request URL** to `http://localhost:8001/<endpoint>` where `<endpoint>` is one of the API endpoints mentioned above.

3. **Select the request method** (GET, POST, PUT, DELETE) based on the API endpoint you want to test.

4. **Add request headers and body (if needed):**

   - For POST and PUT requests, set the `Content-Type` header to `application/json`.
   - Add a JSON body for requests that require it. For example, to create a task, use:

     ```json
     {
       "title": "Sample Task",
       "description": "This is a sample task description."
     }
     ```

5. **Send the request** and check the response.

Feel free to modify the endpoints and request data as per your requirements. Enjoy using the Todo App!


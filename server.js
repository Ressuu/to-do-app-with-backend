// Import Module
const express = require("express");

// Create an Express application
const app = express();
const port = 3000; // Port where the server will listen

// Serve static files from the "public" directory
app.use(express.static("public"));

// Pseudo-database
let tasks = [
  { id: 1, text: "Learn JavaScript project", completed: false },
  { id: 2, text: "Make a to do list app", completed: false },
  { id: 3, text: "Host it on online server", completed: false },
  { id: 4, text: "Link it to your resume", completed: false },
  { id: 5, text: "Get a software job", completed: false },
];

// Endpoint GET /tasks - Retrieve all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Endpoint POST /tasks - Add a new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    text: req.body.text,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Endpoint PUT /tasks/:id - Update a task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    task.completed = req.body.completed;
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

// Endpoint DELETE /tasks/:id - Delete a task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

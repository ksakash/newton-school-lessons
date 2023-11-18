const express = require('express');
const app = express();
const port = ;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory storage for todo items (for demonstration purposes)
const todos = [];

// // Handling a GET request
// app.get('/', (req, res) => {
//     res.send('Hello, Node.js Express Server! (GET)');
// });

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

// Route to get all todo items
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Route to create a new todo item
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Route to update a todo item by ID
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body;

    const existingTodo = todos.find((todo) => todo.id === id);
    if (!existingTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(existingTodo);
});


// Route to update a todo item by ID
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;

  const existingTodo = todos.find((todo) => todo.id === id);
  if (!existingTodo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  Object.assign(existingTodo, updatedTodo);
  res.json(existingTodo);
});

// Route to delete a todo item by ID
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Todo API server is running on http://localhost:${port}`);
});

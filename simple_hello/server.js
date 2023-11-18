const express = require('express');
const app = express();
const port = express();

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Simple Hello World App!');
});

app.get('/home', (req, res) => {
  res.send('');
});

// Route to update a todo item by ID
app.get('/name/:name', (req, res) => {
    const name = req.params.name;
    res.send('Hello ' + name);
});

app.listen(port, () => {
  console.log(`Simple hello server is running on http://localhost:${port}`);
});

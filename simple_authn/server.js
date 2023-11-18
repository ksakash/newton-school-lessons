const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// In-memory database for user data (for demonstration purposes)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome !!'});
});

// Endpoint for user authentication
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided username and password match a user in the database
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Authentication successful' });
  } else {
    res.status(401).json({ message: 'Authentication failed. Invalid username or password.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

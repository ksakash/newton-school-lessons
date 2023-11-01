const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory user data (for demonstration purposes)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

// Login page route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// User authentication route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.send('Authentication successful!');
  } else {
    res.send('Authentication failed. Invalid username or password.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

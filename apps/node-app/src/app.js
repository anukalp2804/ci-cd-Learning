const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD Mastery Node App!' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Simple utility function used for unit testing demonstration
function add(a, b) {
  return a + b;
}

module.exports = { app, add };

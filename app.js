const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const customEnv = require('custom-env');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
customEnv.env(process.env.NODE_ENV, './config');

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

// Route setup
const commentsRouter = require('./routes/comment');
app.use('/api', commentsRouter);

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

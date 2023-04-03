const express = require('express');

// Import our modular router for notes
const notesRouter = require('./notes');

const app = express();

app.use('/api/notes', notesRouter);

module.exports = app;

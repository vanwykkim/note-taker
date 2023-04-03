const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const notes = require('./db/db.json');
const api = require("./routes/index.js");

const app = express();
const PORT = 3001;

app.use(express.static('public'));



//GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//GET route to send all others to start page
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

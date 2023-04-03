// The following HTML routes should be created:

// TODO: GET /notes should return the notes.html file.

// TO DO: GET * should return the index.html file.

// The following API routes should be created:

// TODO: GET /api/notes should read the db.json file and return all saved notes as JSON.

// TODO: POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's 
// saved (look into npm packages that could do this for you).

// Bonus
// You haven’t learned how to handle DELETE requests, but this application offers 
// that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

// DELETE /api/notes/:id should receive a query parameter that contains the id of a note 
// to delete. To delete a note, you'll need to read all notes from the db.json file, remove 
// the note with the given id property, and then rewrite the notes to the db.json file.





const express = require('express');
const path = require('path');
const fs = require('fs');
const {v4 : uuidv4} = require("uuid");

const id = uuidv4();

const app = express();

const PORT = process.env.PORT || 3001;


//middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

// TODO: GET /notes should return the notes.html file.
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// TO DO: GET * should return the index.html file.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for notes
app.get('/api/notes', (req, res) => {
  // Send a message to the client
  res.status(200).json(`${req.method} request received to get notes`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get notes`);
});

// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );

app.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`)
  const ids = uuidv4();
  console.log(ids);
 } );
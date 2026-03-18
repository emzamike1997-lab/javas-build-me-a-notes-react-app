import React, { useState, useEffect } from 'react';
import NotesList from './NotesList.js';
import NoteForm from './NoteForm.js';
import Login from './Login.js';
import { auth } from './firebase.js';

function App() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <NotesList notes={notes} setNotes={setNotes} />
          <NoteForm setNotes={setNotes} />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
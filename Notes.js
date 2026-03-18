import React, { useState, useEffect } from 'react';
import Note from './Note';

function Notes({ user }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://example.com/notes?userId=${user.id}`)
        .then(response => response.json())
        .then(data => setNotes(data));
    }
  }, [user]);

  const handleAddNote = () => {
    const newNote = { title: 'New Note', content: '', userId: user.id };
    fetch('https://example.com/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newNote),
    })
      .then(response => response.json())
      .then(data => setNotes([...notes, data]));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}

export default Notes;
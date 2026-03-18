import React from 'react';

function NotesList({ notes, setNotes }) {
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
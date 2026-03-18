import React, { useState } from 'react';

function NoteForm({ setNotes }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text }]);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
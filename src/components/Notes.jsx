import React, { useState, useEffect } from 'react'

function Notes() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes')
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes))
    }
  }, [])

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const updatedNotes = [...notes, newNote]
      setNotes(updatedNotes)
      setNewNote('')
      localStorage.setItem('notes', JSON.stringify(updatedNotes))
    }
  }

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index)
    setNotes(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes))
  }

  return (
    <div className="notes">
      <h2>Notes</h2>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Add new note"
      />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notes
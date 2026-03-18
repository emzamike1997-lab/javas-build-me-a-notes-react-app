import React, { useState, useEffect } from 'react';
import Note from './Note.js';
import AddNote from './AddNote.js';

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    const addNote = (note) => {
        setNotes([...notes, note]);
        localStorage.setItem('notes', JSON.stringify([...notes, note]));
    };

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
        localStorage.setItem('notes', JSON.stringify(notes.filter((note) => note.id !== id)));
    };

    return (
        <div>
            <h1>Notes App</h1>
            <AddNote addNote={addNote} />
            {notes.map((note) => (
                <Note key={note.id} note={note} deleteNote={deleteNote} />
            ))}
        </div>
    );
}

export default App;
import React, { useState } from 'react';

function AddNote({ addNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            id: Date.now(),
            title,
            content,
        };
        addNote(newNote);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
            <button type="submit">Add Note</button>
        </form>
    );
}

export default AddNote;
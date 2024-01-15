import React, { useState } from 'react';
import Note from './Note';
import './App.css'

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });


  const addNote = () => {
    setNotes([...notes, newNote]);
    setNewNote({ title: '', content: '' });
  };


  return (
    <section className="notes-page">
    <div >
      <h1>Notes</h1>

      <div className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
        className='content'
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        ></textarea>
        <button onClick={addNote}>Add Note</button>
      </div>

      
      </div>
     
      <div className="note-list">
        {notes.map((note, index) => (
          <Note key={index} title={note.title} content={note.content} />
        ))}
    </div> 
    </section>
    
  );
};

export default NotesPage;

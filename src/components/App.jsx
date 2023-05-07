import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import {
    getNotesFromLocalStorage,
    setNotesFromLocalStorage,
} from '../helpers/local-storage.helper';

function App() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        setNotes(getNotesFromLocalStorage());
    }, []);

    function addNote(newNote) {
        const newNotes = [...notes, newNote];
        setNotesFromLocalStorage(newNotes);
        setNotes(newNotes);
    }

    function deleteNote(id) {
        const newNotes = notes.filter((_, index) => {
            return index !== id;
        });
        setNotesFromLocalStorage(newNotes);
        setNotes(newNotes);
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;

import React, { useEffect, useState } from 'react';
import AddNote from './AddNote';
import NoteCard from './NoteCard';
import { getAllNotes } from '../../Functions/Functions';

const NotesContainer = () => {
   
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        const savedNotes = getAllNotes();
        console.log((savedNotes));
        setNotes(savedNotes);
        
    },[])

    return (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                notes.length == 0 ? 
                <p>No notes Found !!</p> :
                notes.map(note =>{
                   return <NoteCard note={note}></NoteCard>
                })
            }
        </div>
    );
};

export default NotesContainer;
import React from 'react';
import AddNote from './AddNote';
import NoteCard from './NoteCard';

const NotesContainer = () => {
    return (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
            <NoteCard></NoteCard>
        </div>
    );
};

export default NotesContainer;
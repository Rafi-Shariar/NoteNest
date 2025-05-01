import React from 'react';
import SearchBar from './SearchBar';
import NotesContainer from './NotesContainer';

const RightAside = () => {
    return (
        <div className=' space-y-4'>
            <SearchBar />
            <div className=''>
                <NotesContainer></NotesContainer>
            </div>
        </div>
    );
};

export default RightAside;

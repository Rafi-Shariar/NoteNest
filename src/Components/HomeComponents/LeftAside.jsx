import React from 'react';
import CategoryContainer from './CategoryContainer';

const LeftAside = () => {
    return (
        <div className='p-2'>
            <h1 className='text-xl font-semibold'>Categories</h1>
            <CategoryContainer></CategoryContainer>
        </div>
    );
};

export default LeftAside;
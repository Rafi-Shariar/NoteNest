import React from 'react';
import { IoIosAddCircle } from "react-icons/io";
const CategoryContainer = () => {
    return (
        <div className='border rounded-xl p-5 mt-2'>

            <h2>Work</h2>
            <h2>Personal</h2>
            <h2>ALL</h2>
            <h2>Study</h2>
            <h2>Study</h2>
            <h2>Study</h2>
            <h2>Study</h2>

           <div>
                <button className='btn btn-primary mt-5'>Create Category <IoIosAddCircle className='text-xl'/></button>
            </div> 
            
        </div>
    );
};

export default CategoryContainer;
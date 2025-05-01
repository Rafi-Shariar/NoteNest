import React from 'react';
const SearchBar = () => {
    return (
        <div className=''>
            <form className="flex flex-col md:flex-row items-stretch gap-2" action="">
                <input
                    type="text"
                    className="input input-bordered w-full md:w-3/4"
                    placeholder="Search Your Note"
                />
                <input
                    type="submit"
                    className="btn bg-blue-500 text-white hover:bg-white hover:text-blue-500 md:w-auto"
                    value="Search"
                />
            </form>
        </div>
    );
};

export default SearchBar;

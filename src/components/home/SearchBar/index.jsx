import React from 'react';

const SearchBar = ({ value, handleSearchBtn, clearSearch }) => {
  return (
    <div className='searchBar-wrap'>
        <form>
            <input 
                type="text" 
                onChange={handleSearchBtn} 
                placeholder='Search by category' 
                value={value} />
                {value && <span onClick={clearSearch}>X</span>}

                <button>Go</button>
        </form>
    </div>
    );
};

export default SearchBar;

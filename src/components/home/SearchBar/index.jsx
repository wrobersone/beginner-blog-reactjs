import React from 'react';
import './styles.css';

const SearchBar = ({ value, handleSearchBtn, clearSearch, formSubmit }) => {
  return (
    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
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

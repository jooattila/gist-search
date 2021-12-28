import React, { useState } from 'react';
import './index.css';

const Search = (props: { handleSearch: any }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearch = () => {
    props.handleSearch(inputValue);
    setInputValue('');
  };

  return (
    <div className='searchDiv'>
      <input
        className='searchInput'
        placeholder='Search..'
        onChange={event => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <button className='searchButton' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;

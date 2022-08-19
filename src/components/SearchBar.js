import React from 'react';

const SearchBar = () => {
  return(
    <form>
      <input
      type="text"
      placeholder="Search Recipe"
      />
      <label>
        Ingredientes
        <input 
        type="radio"
        />
      </label>
      <label>
        Name
        <input 
        type="radio"
        />
      </label>
      <label>
        First Letter
        <input 
        type="radio"
        />
      </label>
    </form>
  )
}

export default SearchBar;

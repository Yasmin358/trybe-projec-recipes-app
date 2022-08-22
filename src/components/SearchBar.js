import React from 'react';

function SearchBar() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search Recipe"
        data-testid="search-input"
      />
      <label htmlFor="Ingredientes">
        Ingredientes
        <input
          id="Ingredientes"
          type="radio"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="radio"
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="firstLetter">
        First Letter
        <input
          id="firstLetter"
          type="radio"
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="submit"
        data-testid="exec-search-btn"
      >
        Pesquisar
      </button>
    </form>
  );
}

export default SearchBar;

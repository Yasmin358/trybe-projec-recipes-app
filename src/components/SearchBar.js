import React, { useState } from 'react';

function SearchBar() {
  const [filter, setFilter] = useState(
    {
      SearchInput: '',
      radios: '',
    },
  );

  const handleInput = ({ target }) => {
    setFilter((oldState) => ({ ...oldState,
      [target.name]: target.value,
    }));
  };

  const { SearchInput } = filter;
  return (
    <form>
      <input
        name="SearchInput"
        type="text"
        placeholder="Search Recipe"
        data-testid="search-input"
        value={ SearchInput }
        onChange={ handleInput }
      />
      <label htmlFor="Ingredientes">
        Ingredientes
        <input
          id="Ingredientes"
          type="radio"
          data-testid="ingredient-search-radio"
          name="radios"
          value="ingredientes "
          onChange={ handleInput }
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="radio"
          data-testid="name-search-radio"
          name="radios"
          value="name"
          onChange={ handleInput }
        />
      </label>
      <label htmlFor="firstLetter">
        First Letter
        <input
          id="firstLetter"
          type="radio"
          data-testid="first-letter-search-radio"
          name="radios"
          value="firstLetter"
          onChange={ handleInput }
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

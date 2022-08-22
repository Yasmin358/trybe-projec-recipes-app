import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import {
  foodsFilterIngredients,
  foodsFilterNome,
  foodsFilterFirstLetter,
} from '../services/themealdb';

function SearchBar() {
  const [filter, setFilter] = useState(
    {
      SearchInput: '',
      radios: '',
    },
  );
  const { setRecipesAPIReturn } = useContext(GlobalContext);

  const handleInput = ({ target }) => {
    setFilter((oldState) => ({ ...oldState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { radios, SearchInput } = filter;

    if (radios === 'firstLetter' && SearchInput.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    switch (radios) {
    case 'ingredientes':
      setRecipesAPIReturn(await foodsFilterIngredients(SearchInput));
      break;
    case 'name':
      setRecipesAPIReturn(await foodsFilterNome(SearchInput));
      break;
    case 'firstLetter':
      setRecipesAPIReturn(await foodsFilterFirstLetter(SearchInput));
      break;
    default:
      return radios;
    }
  };

  const { SearchInput } = filter;
  return (
    <form onSubmit={ handleSubmit }>
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
          value="ingredientes"
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

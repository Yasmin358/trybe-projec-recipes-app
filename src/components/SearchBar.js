import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import {
  foodsFilterIngredients,
  foodsFilterNome,
  foodsFilterFirstLetter,
  drinkFilterIngredients,
  drinkFilterNome,
  drinkFilterFirstLetter,
} from '../services/themealdb';

function SearchBar() {
  const { setapiFoods, setapiDrinks, apiFoods, apiDrinks } = useContext(GlobalContext);
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

  const foodFunction = async () => {
    const { radios, SearchInput } = filter;

    if (radios === 'firstLetter' && (SearchInput.length > 1 || !SearchInput.trim())) {
      return global.alert('Your search must have only 1 (one) character');
    }
    switch (radios) {
    case 'ingredientes':
      setapiFoods(await foodsFilterIngredients(SearchInput));
      break;
    case 'name':
      // console.log(await foodsFilterNome(SearchInput));
      setapiFoods(await foodsFilterNome(SearchInput));
      break;
    case 'firstLetter':
      setapiFoods(await foodsFilterFirstLetter(SearchInput));
      break;
    default:
      return global
        .alert('Your search must choose a filter (ingredients, name or first letter)');
    }
  };

  const drinkFunction = async () => {
    const { radios, SearchInput } = filter;

    if (radios === 'firstLetter' && (SearchInput.length > 1 || !SearchInput.trim())) {
      return global.alert('Your search must have only 1 (one) character');
    }
    switch (radios) {
    case 'ingredientes':
      setapiDrinks(await drinkFilterIngredients(SearchInput));
      break;
    case 'name':
      setapiDrinks(await drinkFilterNome(SearchInput));
      break;
    case 'firstLetter':
      setapiDrinks(await drinkFilterFirstLetter(SearchInput));
      break;
    default:
      return global
        .alert('Your search must choose a filter (ingredients, name or first letter)');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (document.location.pathname === '/foods') {
      return foodFunction();
    }
    return drinkFunction();
  };

  useEffect(() => {
    const meals = apiFoods;
    const drinks = apiDrinks;
    if (meals?.length === 1) {
      document.location.pathname = `/foods/${meals[0].idMeal}`;
    }
    if (drinks?.length === 1) {
      document.location.pathname = `/drinks/${drinks[0].idDrink}`;
    }
  }, [apiFoods, apiDrinks]);

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
        onClick={ handleSubmit }
      >
        Pesquisar
      </button>
    </form>
  );
}

export default SearchBar;

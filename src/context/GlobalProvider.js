import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import { drinks, foods } from '../services/themealdb';

function GlobalProvider({ children }) {
  const [headerTitle, setheaderTitle] = useState({ title: '', search: true });
  const [recipesAPIReturn, setRecipesAPIReturn] = useState([]);
  const [apiDrinks, setapiDrinks] = useState([]);
  const [apiFoods, setapiFoods] = useState([]);

  const store = {
    recipesAPIReturn,
    setRecipesAPIReturn,
    headerTitle,
    setheaderTitle,
    apiDrinks,
    apiFoods,
  };

  async function requestDrinksFoodsApi() {
    const responseDrinks = await drinks();
    const responseFoods = await foods();
    setapiDrinks(responseDrinks);
    setapiFoods(responseFoods);
  }

  useEffect(() => {
    requestDrinksFoodsApi();
  }, []);

  return (
    <GlobalContext.Provider
      value={ store }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default GlobalProvider;

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import { drinks, foods } from '../services/themealdb';

function GlobalProvider({ children }) {
  const [headerTitle, setheaderTitle] = useState({ title: '', search: true });
  const [recipesAPIReturn, setRecipesAPIReturn] = useState([]);
  const [apiDrinks, setapiDrinks] = useState([]);
  const [apiFoods, setapiFoods] = useState([]);
  const [apiDrinksCategory, setdrinksCategory] = useState([]);
  const [apiFoodsCategory, setfoodsCategory] = useState([]);
  const [toogleButton, settoogleButton] = useState('');

  const filterHandleClick = async (event) => {
    event.preventDefault();
    const button = toogleButton;
    if (event.target.name === 'All' || event.target.name === button) {
      settoogleButton(event.target.name);
      const url = 'search.php?s=';
      if (headerTitle.title === 'Drinks') {
        const callApi = await callApiDrinks(url);
        return setapiDrinks(callApi);
      } if (headerTitle.title === 'Foods') {
        const callApi = await callApiFoods(url);
        return setapiFoods(callApi);
      }
    }
    if (headerTitle.title === 'Drinks') {
      const url = `filter.php?c=${event.target.name}`;
      console.log('teste');
      const callApi = await callApiDrinks(url);
      settoogleButton(event.target.name);
      return setapiDrinks(callApi);
    }
    if (headerTitle.title === 'Foods') {
      const url = `filter.php?c=${event.target.name}`;
      const callApi = await callApiFoods(url);
      settoogleButton(event.target.name);
      return setapiFoods(callApi);
    }
  };

  const store = {
    recipesAPIReturn,
    setRecipesAPIReturn,
    headerTitle,
    setheaderTitle,
    apiDrinks,
    apiFoods,
    apiDrinksCategory,
    apiFoodsCategory,
    filterHandleClick,
  };

  async function requestFoodApi(endpoint) {
    const responseFoods = await foods(endpoint);
    return responseFoods;
  }
  async function requestDrinksApi(endpoint) {
    const responseDrinks = await drinks(endpoint);
    return responseDrinks;
  }

  // monta array de foods e drinks
  useEffect(() => {
    const url = 'search.php?s=';
    async function fetch() {
      const getDrinks = await requestDrinksApi(url);
      const getFoods = await requestFoodApi(url);
      setapiDrinks(getDrinks);
      setapiFoods(getFoods);
    }
    fetch();
  }, []);

  // monta array de categorias foods e drinks
  useEffect(() => {
    const url = 'list.php?c=list';
    async function fetch() {
      const getCategoryDrinks = await requestDrinksApi(url);
      const getCategoryFoods = await requestFoodApi(url);
      setdrinksCategory(getCategoryDrinks);
      setfoodsCategory(getCategoryFoods);
    }
    fetch();
  }, []);

  const callApiFoods = async (url) => {
    const apiResponse = await foods(url);
    return apiResponse;
  };

  const callApiDrinks = async (url) => {
    const apiResponse = await drinks(url);
    return apiResponse;
  };

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

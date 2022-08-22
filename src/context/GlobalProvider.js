import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import { drinks, drinksCategory, foods, foodsCategory } from '../services/themealdb';

function GlobalProvider({ children }) {
  const [headerTitle, setheaderTitle] = useState({ title: '', search: true });
  const [apiDrinks, setapiDrinks] = useState([]);
  const [apiFoods, setapiFoods] = useState([]);
  const [apiDrinksCategory, setdrinksCategory] = useState([]);
  const [apiFoodsCategory, setfoodsCategory] = useState([]);

  async function requestDrinksFoodsApi() {
    const responseDrinks = await drinks();
    const responseDrinkCategory = await drinksCategory();
    const responseFoods = await foods();
    const responseFoodsCategory = await foodsCategory();
    setapiDrinks(responseDrinks);
    setdrinksCategory(responseDrinkCategory);
    setfoodsCategory(responseFoodsCategory);
    setapiFoods(responseFoods);
  }

  useEffect(() => {
    requestDrinksFoodsApi();
  }, []);

  return (
    <GlobalContext.Provider
      value={ {
        headerTitle,
        setheaderTitle,
        apiDrinks,
        apiFoods,
        apiDrinksCategory,
        apiFoodsCategory,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default GlobalProvider;

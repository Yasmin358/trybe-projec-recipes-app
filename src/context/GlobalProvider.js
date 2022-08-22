import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import { drinks, foods } from '../services/themealdb';

function GlobalProvider({ children }) {
  const [headerTitle, setheaderTitle] = useState({ title: '', search: true });
  const [apiDrinks, setapiDrinks] = useState([]);
  const [apiFoods, setapiFoods] = useState([]);

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
      value={ {
        headerTitle,
        setheaderTitle,
        apiDrinks,
        apiFoods,
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

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [headerTitle, setheaderTitle] = useState({ title: '', search: true });
  const [recipesAPIReturn, setRecipesAPIReturn] = useState('');

  const store = {
    recipesAPIReturn,
    setRecipesAPIReturn,
    headerTitle,
    setheaderTitle,
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

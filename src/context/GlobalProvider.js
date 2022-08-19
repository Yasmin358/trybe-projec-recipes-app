import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

function GlobalProvider({ children }) {
  const [headerTitle, setheaderTitle] = useState({ title: '' });

  return (
    <GlobalContext.Provider
      value={ {
        headerTitle, setheaderTitle,
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

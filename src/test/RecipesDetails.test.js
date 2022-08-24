import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RecipesDetails from '../pages/RecipesDetails';
import GlobalContext from '../context/GlobalContext';

const store = {

};

describe('Tests for the RecipesDetails component', () => {
  it('checks if the component renders accordingly', () => {
    render(
      <GlobalContext.Provider value={ store }>
        <BrowserRouter>
          <RecipesDetails
            {
              ...{ match: { params: { id: '52772' } },
                history: { location: { pathname: '/foods/52772' } } }
            }
          />
        </BrowserRouter>
      </GlobalContext.Provider>, document.createElement('div'),
    );
  });
});

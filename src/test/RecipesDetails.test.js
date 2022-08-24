import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('Tests for the RecipesDetails component', () => {
  it('checks if the component renders accordingly', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>, document.createElement('div'),
    );
  });
});

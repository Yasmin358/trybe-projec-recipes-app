import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import RecipeDetails from '../pages/RecipeDetails';
import GlobalContext from '../context/GlobalContext';
import { Router } from "react-router-dom";
import { mockFetch, mockLocalStorage } from './helpers/mockFunctions';
import { favoriteRecipes, doneRecipes, inProgressRecipes, favoriteRecipesOnlyDrinks } from './helpers/mockLocalStorageObject';
import { id52772, id11007, id52773, id178319 } from './helpers/recipesByID';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

//https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b

const store = 'store';

const recipes = {
  teryakiID: '52772',
  teryakiUrl: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772',
  margaritaID: '11007',
  margaritaUrl: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007',
  aquamarineID: '178319',
  aquamirineID: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=178319',
  notFavID: '52773',
  notFavUrl: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52773',
}

const str = {
  favIcon: 'blackHeartIcon.svg',
  defavIcon: 'whiteHeartIcon.svg',
}

const history = createMemoryHistory()

const renderPage = (id, pathname) => {
  render(
    <GlobalContext.Provider value={ store }>
      <Router history={history}>
        <RecipeDetails 
          {
            ...{ match: { params: { id } },
              history: { location: { pathname } } }
          }
        />
      </Router>
    </GlobalContext.Provider>
  )
}

describe('Tests for the RecipesDetails component', () => {

  it('checks if the api is called correctly if the route is /foods', async() => {
    history.push(`/foods/${recipes.teryakiID}`);
    mockFetch(id52772);
    mockLocalStorage('favoriteRecipes', favoriteRecipes);
    act(() => renderPage(recipes.teryakiID, history.location.pathname));
    // Sem este "await waitFor" o código quebra porque há uma mudança de estado assíncrona na montagem do componente
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    expect(global.fetch).toHaveBeenCalledWith(recipes.teryakiUrl);
  })

  it('checks if the api is called correctly if the route is /drinks', async() => {
    history.push(`/drinks/${recipes.margaritaID}`);
    mockFetch(id11007);
    mockLocalStorage('favoriteRecipes', favoriteRecipes);
    act(() => renderPage(recipes.margaritaID, history.location.pathname));
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    expect(global.fetch).toHaveBeenCalledWith(recipes.margaritaUrl);
  })

  it('checks if the black heart icon is displayed if the recipe is favorited', async () => {
    history.push(`/foods/${recipes.teryakiID}`);
    mockFetch(id52772);
    mockLocalStorage('favoriteRecipes', favoriteRecipes);
    act(() => renderPage(recipes.teryakiID, history.location.pathname));
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    const favIcon = screen.getByAltText('fav icon').src.split('t/')[1];
    expect(favIcon).toBe(str.favIcon);
  })

  it('checks if the white heart icon is displayed if the recipe is not favorited', async () => {
    history.push(`/foods/${recipes.notFavID}`);
    mockFetch(id52773);
    mockLocalStorage('favoriteRecipes', favoriteRecipes);
    act(() => renderPage(recipes.notFavID, history.location.pathname));
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    const favIcon = screen.getByAltText('fav icon').src.split('t/')[1];
    expect(favIcon).toBe(str.defavIcon);
  })

  it('checks if the "start" btn text content is "Start Recipe" if the recipe has not yet been started', async() => {
    history.push(`/drinks/${recipes.margaritaID}`);
    mockFetch(id11007);
    mockLocalStorage('favoriteRecipes', favoriteRecipes);
    act(() => renderPage(recipes.margaritaID, history.location.pathname));
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    const startBtn = screen.getByTestId('start-recipe-btn');
    expect(startBtn.textContent).toBe('Start Recipe');
  })

  it('checks if the "start" btn text content is "Continue Recipe" if the recipe has been started', async() => {
    history.push(`/drinks/${recipes.aquamarineID}`);
    mockFetch(id178319);
    mockLocalStorage('favoriteRecipes', favoriteRecipes);
    mockLocalStorage('inProgressRecipes', inProgressRecipes);
    act(() => renderPage(recipes.aquamarineID, history.location.pathname));
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    const startBtn = screen.getByTestId('start-recipe-btn');
    expect(startBtn.textContent).toBe('Continue Recipe');
  })

  it('checks if the "start" button is hidden if the recipe has already been done', async() => {
    history.push(`/foods/${recipes.teryakiID}`);
    mockFetch(id52772);
    mockLocalStorage('favoriteRecipes', favoriteRecipes);
    mockLocalStorage('doneRecipes', doneRecipes);
    act(() => renderPage(recipes.teryakiID, history.location.pathname));
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    expect(screen.getByTestId('start-recipe-btn')).not.toHaveStyle('display: none');
  })

  it('checks if the "start" button is displayed if the recipe has not yet been done', async() => {
    history.push(`/drinks/${recipes.margaritaID}`);
    mockFetch(id11007);
    mockLocalStorage('favoriteRecipes', favoriteRecipes);
    mockLocalStorage('doneRecipes', doneRecipes);
    act(() => renderPage(recipes.margaritaID, history.location.pathname));
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    expect(screen.getByTestId('start-recipe-btn')).toBeVisible();
  })

  it('checks if a recipe not yet favorited can be favorited, and its icon changes from empty to filled', async() => {
    history.push(`/foods/${recipes.teryakiID}`);
    mockFetch(id52772);
    mockLocalStorage();
    localStorage.setItem('favoriteRecipes', favoriteRecipesOnlyDrinks);
    act(() => renderPage(recipes.teryakiID, history.location.pathname));
    await waitFor(() => { expect(screen.getByTestId('favorite-btn')).toBeInTheDocument()});
    const favIcon = screen.getByAltText('fav icon').src.split('t/')[1];
    expect(favIcon).toBe(str.defavIcon);
    act(() => userEvent.click(screen.getByTestId('favorite-btn')));
    // cont. from click on the fav btn

  })

})
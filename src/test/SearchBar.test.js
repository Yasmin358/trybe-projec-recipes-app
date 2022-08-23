import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import GlobalContext from '../context/GlobalContext';
import App from '../App';
import MockMeal from '../services/MockMeal';
import { renderWithRouter } from '../test/helpers/renderWithRouter'
import SearchBar from '../components/SearchBar';

describe('Verifica a cobertura do componente SearchBar', () => {
  const mockJest = () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MockMeal),
    });
  };

  global.alert = jest.fn();

  afterEach(() => jest.clearAllMocks());
  beforeEach(() => mockJest());

  const store = {
    recipesAPIReturn: [],
    setRecipesAPIReturn(param) {
      store.recipesAPIReturn = param;
    },
    headerTitle: { title: '', search: true },
    setheaderTitle(param) {
      store.headerTitle = param;
    },
    apiDrinks: [],
    apiFoods: [],
  };

  test('Testa a renderização do componente', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    const email = 'email@pessoa.com';
    const password = '1234567';

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.click(button);

    expect(document.location.pathname).toBe('/foods');

    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);

    const inputText = screen.getByTestId('search-input');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetteradio = screen.getByTestId('first-letter-search-radio');
    const buton = screen.getByTestId('exec-search-btn');

    expect(inputText).toBeInTheDocument();
    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetteradio).toBeInTheDocument();
    expect(buton).toBeInTheDocument();
  });

  test('Testa se a busca na API é feita corretamente pelo ingrediente', async () => {
    render(
      <GlobalContext.Provider value={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalContext.Provider>,
    );

    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);

    const inputText = screen.getByTestId('search-input');
    const nameRadio = screen.getByTestId('name-search-radio');
    const buton = screen.getByTestId('exec-search-btn');

    userEvent.type(inputText, 'Arrabiata');
    userEvent.click(nameRadio);
    userEvent.click(buton);

    expect(global.fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  });

  test('Testa a filtro dos radios buttons Food', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');

    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);

    const inputText = screen.getByTestId('search-input');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const buton = screen.getByTestId('exec-search-btn');

    userEvent.type(inputText, 'chicken');
    userEvent.click(ingredientRadio);
    userEvent.click(buton);

    expect(global.fetch).toHaveBeenCalled();
  });

  test('Testa a filtro dos radios buttons Drinks', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const changeToDrinks = screen.getByTestId('drinks-bottom-btn');

    userEvent.click(changeToDrinks);

    expect(document.location.pathname).toBe('/drinks');

    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);

    const inputText = screen.getByTestId('search-input');
    const firstLetteradio = screen.getByTestId('first-letter-search-radio');
    const buton = screen.getByTestId('exec-search-btn');

    userEvent.type(inputText, 'l');
    userEvent.click(firstLetteradio);
    userEvent.click(buton);

    expect(global.fetch).toHaveBeenCalled();
  });

  test('Testa a filtro dos radios buttons Foods (firstLetter)', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const changeToFoods = screen.getByTestId('food-bottom-btn');

    userEvent.click(changeToFoods);

    expect(document.location.pathname).toBe('/foods');

    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);

    const inputText = screen.getByTestId('search-input');
    const firstLetteradio = screen.getByTestId('first-letter-search-radio');
    const buton = screen.getByTestId('exec-search-btn');

    userEvent.type(inputText, 'l');
    userEvent.click(firstLetteradio);
    userEvent.click(buton);

    expect(global.fetch).toHaveBeenCalled();
  });

  test('Testa a filtro dos radios buttons Foods (firstLetter - none)', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const changeToFoods = screen.getByTestId('food-bottom-btn');

    userEvent.click(changeToFoods);

    expect(document.location.pathname).toBe('/foods');

    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);

    const inputText = screen.getByTestId('search-input');
    const buton = screen.getByTestId('exec-search-btn');

    userEvent.type(inputText, 'lemon');
    userEvent.click(buton);

    expect(global.fetch).not.toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=lemon');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=lemon');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=lemon');
  });

  // Cont. from here:
  test.only('Testa a filtro dos radios buttons Drinks (ingredients)', async () => {
    render(
      <GlobalContext.Provider value={ store }>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </GlobalContext.Provider>,
    );
    const changeToDrinks = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(changeToDrinks);
    expect(document.location.pathname).toBe('/drinks');
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);
    const inputText = screen.getByTestId('search-input');
    const ingredientsRadio = screen.getByTestId('ingredient-search-radio');
    const buton = screen.getByTestId('exec-search-btn');
    userEvent.type(inputText, 'lemon');
    userEvent.click(ingredientsRadio);
    userEvent.click(buton);
    expect(global.fetch).toHaveBeenCalled();
    const nameRadio = screen.getByTestId('name-search-radio');
    userEvent.type(inputText, 'vodka');
    userEvent.click(nameRadio);
    userEvent.click(buton);
    expect(global.fetch).toHaveBeenCalled();
    const THREE = 3000;
    await new Promise((res) => setTimeout(res(1), THREE));
    console.log(document.location.pathname);
    expect(document.location.pathname.includes('/drinks/')).toBe(true);
  });

  test('Testa a filtro dos radios buttons Drinks(no selection)', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const changeToDrinks = screen.getByTestId('drinks-bottom-btn');

    userEvent.click(changeToDrinks);

    expect(document.location.pathname).toBe('/drinks');

    const searchButton = screen.getByTestId('search-top-btn');

    userEvent.click(searchButton);

    const inputText = screen.getByTestId('search-input');
    const buton = screen.getByTestId('exec-search-btn');

    userEvent.type(inputText, 'vodka');
    userEvent.click(buton);

    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=vodka');
  });
});

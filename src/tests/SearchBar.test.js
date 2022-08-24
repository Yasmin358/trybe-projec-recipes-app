import React from 'react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import GlobalContext from '../context/GlobalContext';
import App from '../App';
import MockMeal from '../services/MockMeal';

const searchTopBtn = 'search-top-btn';
const searchInput = 'search-input';
const ingSearchRadio = 'ingredient-search-radio';
const nameSearchRadio = 'name-search-radio';
const flSearchRadio = 'first-letter-search-radio';
const execSearchBtn = 'exec-search-btn';
const drinksBottomBtn = 'drinks-bottom-btn';
const foodBottomBtn = 'food-bottom-btn';

describe('Verifica a cobertura do componente SearchBar', () => {
  const mockJest = () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(MockMeal),
    });
  };
  global.alert = jest.fn();
  afterEach(() => { jest.clearAllMocks(); cleanup(); });
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
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const inputText = screen.getByTestId(searchInput);
    const ingredientRadio = screen.getByTestId(ingSearchRadio);
    const nameRadio = screen.getByTestId(nameSearchRadio);
    const firstLetteradio = screen.getByTestId(flSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    expect(inputText).toBeInTheDocument();
    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetteradio).toBeInTheDocument();
    expect(buton).toBeInTheDocument();
    cleanup();
  });
  test('Testa se a busca na API é feita corretamente pelo ingrediente', async () => {    
    render(<GlobalContext.Provider><BrowserRouter><App /></BrowserRouter></GlobalContext.Provider>);
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const inputText = screen.getByTestId(searchInput);
    const nameRadio = screen.getByTestId(nameSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    userEvent.type(inputText, 'Arrabiata');
    userEvent.click(nameRadio);
    userEvent.click(buton);
    expect(global.fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    cleanup();
    screen.logTestingPlaygroundURL()
  });

  test('Testa a filtro dos radios buttons Food', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const inputText = screen.getByTestId(searchInput);
    const ingredientRadio = screen.getByTestId(ingSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    userEvent.type(inputText, 'chicken');
    userEvent.click(ingredientRadio);
    userEvent.click(buton);
    expect(global.fetch).toHaveBeenCalled();
    cleanup();
  });
  test('Testa a filtro dos radios buttons Drinks', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const changeToDrinks = screen.getByTestId(drinksBottomBtn);
    userEvent.click(changeToDrinks);
    expect(document.location.pathname).toBe('/drinks');
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const inputText = screen.getByTestId(searchInput);
    const firstLetteradio = screen.getByTestId(flSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    userEvent.type(inputText, 'l');
    userEvent.click(firstLetteradio);
    userEvent.click(buton);
    expect(global.fetch).toHaveBeenCalled();
    cleanup();
  });
  test('Testa a filtro dos radios buttons Foods (firstLetter)', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const changeToFoods = screen.getByTestId(foodBottomBtn);
    userEvent.click(changeToFoods);
    expect(document.location.pathname).toBe('/foods');
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const inputText = screen.getByTestId(searchInput);
    const firstLetteradio = screen.getByTestId(flSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    userEvent.type(inputText, 'l');
    userEvent.click(firstLetteradio);
    userEvent.click(buton);
    expect(global.fetch).toHaveBeenCalled();
    cleanup();
  });
  test('Testa a filtro dos radios buttons Drinks (firstLetter - none)', async () => {
    render(
      <GlobalContext.Provider value={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalContext.Provider>,
    );
    const changeToDrinks = screen.getByTestId(drinksBottomBtn);
    userEvent.click(changeToDrinks);
    expect(document.location.pathname).toBe('/drinks');
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const firstLetter = screen.getByTestId(flSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    act(() => { userEvent.click(firstLetter); });
    act(() => { userEvent.click(buton); });
    expect(global.alert).toHaveBeenCalled();
    cleanup();
  });

  test.skip('Testa a filtro dos radios buttons Foods (firstLetter - none)', async () => {
    render(
      <GlobalContext.Provider value={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalContext.Provider>,
    );
    const changeToFoods = screen.getByTestId(foodBottomBtn);
    userEvent.click(changeToFoods);
    expect(document.location.pathname).toBe('/foods');
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const firstLetter = screen.getByTestId(flSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    act(() => { userEvent.click(firstLetter); });
    act(() => { userEvent.click(buton); });
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=lemon');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=lemon');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=lemon');
    expect(global.alert).toHaveBeenCalled();
  });
  test.skip('Testa a filtro dos radios buttons Drinks (ingredients)', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const changeToDrinks = screen.getByTestId(drinksBottomBtn);
    userEvent.click(changeToDrinks);
    expect(document.location.pathname).toBe('/drinks');
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const inputText = screen.getByTestId(searchInput);
    const ingredientsRadio = screen.getByTestId(ingSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    userEvent.type(inputText, 'lemon');
    userEvent.click(ingredientsRadio);
    userEvent.click(buton);
    expect(global.fetch).toHaveBeenCalled();
    const nameRadio = screen.getByTestId(nameSearchRadio);
    userEvent.type(inputText, 'vodka');
    userEvent.click(nameRadio);
    userEvent.click(buton);
    expect(global.fetch).toHaveBeenCalled();
  });
  test.skip('Testa a filtro dos radios buttons Drinks(no selection)', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const changeToDrinks = screen.getByTestId(drinksBottomBtn);
    userEvent.click(changeToDrinks);
    expect(document.location.pathname).toBe('/drinks');
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const inputText = screen.getByTestId(searchInput);
    const buton = screen.getByTestId(execSearchBtn);
    userEvent.type(inputText, 'vodka');
    act(() => userEvent.click(buton));
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=vodka');
    expect(global.alert).toHaveBeenCalled();
  });
  test.skip('Testa a filtro dos radios buttons Foods(no selection)', async () => {
    render(<BrowserRouter><App /></BrowserRouter>, '/');
    const changeToFoods = screen.getByTestId(foodBottomBtn);
    userEvent.click(changeToFoods);
    expect(document.location.pathname).toBe('/foods');
    const searchButton = screen.getByTestId(searchTopBtn);
    userEvent.click(searchButton);
    const inputText = screen.getByTestId(searchInput);
    const ing = screen.getByTestId(ingSearchRadio);
    const name = screen.getByTestId(nameSearchRadio);
    const fl = screen.getByTestId(flSearchRadio);
    const buton = screen.getByTestId(execSearchBtn);
    userEvent.type(inputText, 'chicken');
    act(() => userEvent.click(buton));
    console.log(inputText.value, ing.checked, name.checked, fl.checked);
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka');
    expect(global.fetch).not.toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=vodka');
    expect(global.alert).toHaveBeenCalled();
  });
});

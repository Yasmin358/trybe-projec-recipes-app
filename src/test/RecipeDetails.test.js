import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import RecipeDetails from '../pages/RecipeDetails';
import GlobalContext from '../context/GlobalContext';

const store = {

};

const data = {
  meals: [{
    idMeal: '52772',
    strMeal: 'Teriyaki Chicken Casserole',
    strDrinkAlternate: null,
    strCategory: 'Chicken',
    strArea: 'Japanese',
    strInstructions: `Preheat oven to 350° F.
  Spray a 9x13-inch baking pan with non-stick spray.
  \r\nCombine soy sauce, ½ cup water, brown sugar,
  ginger and garlic in a small saucepan and cover.
  Bring to a boil over medium heat. Remove lid and
  cook for one minute once boiling.
  \r\nMeanwhile, stir together the corn starch and 2 tablespoons
  of water in a separate dish until smooth. Once sauce is boiling,
  add mixture to the saucepan and stir to combine. Cook until
  the sauce starts to thicken then remove from heat.
  \r\nPlace the chicken breasts in the prepared pan.
  Pour one cup of the sauce over top of chicken.
  Place chicken in oven and bake 35 minutes or until cooked through.
  Remove from oven and shred chicken in the dish using two forks.
  \r\n*Meanwhile, steam or cook the vegetables according to package directions.
  \r\nAdd the cooked vegetables and rice to the casserole dish with the chicken.
  Add most of the remaining sauce, reserving a bit to drizzle over the top when
  serving. Gently toss everything together in the casserole dish until combined.
  Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes
  before serving. Drizzle each serving with remaining sauce. Enjoy!`,
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    strTags: 'Meat,Casserole',
    strYoutube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s',
    strIngredient1: 'soy sauce',
    strIngredient2: 'water',
    strIngredient3: 'brown sugar',
    strIngredient4: 'ground ginger',
    strIngredient5: 'minced garlic',
    strIngredient6: 'cornstarch',
    strIngredient7: 'chicken breasts',
    strIngredient8: 'stir-fry vegetables',
    strIngredient9: 'brown rice',
    strIngredient10: '',
    strIngredient11: '',
    strIngredient12: '',
    strIngredient13: '',
    strIngredient14: '',
    strIngredient15: '',
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: '3/4 cup',
    strMeasure2: '1/2 cup',
    strMeasure3: '1/4 cup',
    strMeasure4: '1/2 teaspoon',
    strMeasure5: '1/2 teaspoon',
    strMeasure6: '4 Tablespoons',
    strMeasure7: '2',
    strMeasure8: '1 (12 oz.)',
    strMeasure9: '3 cups',
    strMeasure10: '',
    strMeasure11: '',
    strMeasure12: '',
    strMeasure13: '',
    strMeasure14: '',
    strMeasure15: '',
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  }],
};

const mockFetch = () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(data),
  });
};

const mockErrorFetch = () => {
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(),
  });
};

const mockLocalStorage = (items = {}) => {
  jest.spyOn(localStorage, 'getItem');
  jest.spyOn(localStorage, 'setItem');
  global.localStorage = {
    items,
    getItem(key) {
      return global.localStorage.items[key];
    },
    setItem(key, value) {
      global.localStorage.items[key] = value;
    },
  };
};

const renderRecipesDetailsPage = (id = '52772', pathname = '/foods/52772') => act(() => {
  render(
    <GlobalContext.Provider value={ store }>
      <BrowserRouter>
        <RecipeDetails
          {
            ...{ match: { params: { id } },
              history: { location: { pathname } } }
          }
        />
      </BrowserRouter>
    </GlobalContext.Provider>, document.createElement('div'),
  );
});

describe('Tests for the RecipesDetails component', () => {
  // beforeEach(() => mockFetch());
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('checks if the page renders accordingly', () => {
    mockFetch();
    renderRecipesDetailsPage();
    expect(global.fetch).toHaveBeenCalled();
  });

  it('checks if the an error is throw if no data comes from the api', () => {
    mockErrorFetch();
    renderRecipesDetailsPage();
    expect(global.fetch).toHaveBeenCalled();
  });

  it('checks if a favorited drink is rendered with the black heart icon', async () => {
    mockFetch();
    mockLocalStorage({
      favoriteRecipes: JSON.stringify([{
        id: '178319',
        type: 'drink',
        nationality: '',
        category: 'Cocktail',
        alcoholicOrNot: 'Alcoholic',
        name: 'Aquamarine',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      },
      {
        id: '52772',
        type: 'food',
        nationality: 'Japanese',
        category: 'Chicken',
        alcoholicOrNot: '',
        name: 'Teriyaki Chicken Casserole',
        image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
      },
      ]) });
    renderRecipesDetailsPage();
    expect(global.fetch).toHaveBeenCalled();
    await waitFor(() => expect(screen.getByTestId('favorite-btn')).toBeInTheDocument());
  });
});

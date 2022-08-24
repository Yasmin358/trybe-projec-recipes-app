export const foods = async (endpoint) => {
  const url = `https://www.themealdb.com/api/json/v1/1/${endpoint}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export const drinks = async (endpoint) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/${endpoint}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
};

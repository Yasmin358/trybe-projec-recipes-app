export const foods = async (endpoint) => {
  const url = `https://www.themealdb.com/api/json/v1/1/${endpoint}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};
// const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`;
export const drinks = async (endpoint) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/${endpoint}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
};
// const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`;

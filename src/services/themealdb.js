export const foods = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  console.log();
  return data.meals;
};

export const drinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
};

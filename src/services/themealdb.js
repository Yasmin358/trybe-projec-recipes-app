export const foods = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const drinks = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const foodsFilterIngredients = async (ingrediente) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const foodsFilterNome = async (nome) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const foodsFilterFirstLetter = async (firstLetter) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

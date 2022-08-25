import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import CardFavorite from '../components/CardFavorite';

const getFavoritesFromLocalStorage = () => {
  const favs = localStorage.getItem('favoriteRecipes');
  if (!favs) return false;
  return JSON.parse(favs);
};

function FavoriteRecipes() {
  const { setheaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Favorite Recipes', search: false });
  }, [setheaderTitle]);

  const favs = getFavoritesFromLocalStorage();

  return (
    <>
      <Header />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Foods
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drink
      </button>
      { favs
        ? <CardFavorite props={ favs } />
        : <p>Você não tem nenhuma receita favorita</p> }
    </>
  );
}

export default FavoriteRecipes;

/*
[{
    id: id-da-receita,
    type: food-ou-drink,
    nationality: nacionalidade-da-receita-ou-texto-vazio,
    category: categoria-da-receita-ou-texto-vazio,
    alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    name: nome-da-receita,
    image: imagem-da-receita
}]
*/

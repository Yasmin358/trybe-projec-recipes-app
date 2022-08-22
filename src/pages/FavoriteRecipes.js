import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function FavoriteRecipes() {
  const { setheaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Favorite Recipes', search: false });
  }, [setheaderTitle]);

  return (
    <>
      <Header />
      <main>FavoriteRecipes</main>
    </>
  );
}

export default FavoriteRecipes;

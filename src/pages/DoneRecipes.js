import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function DoneRecipes() {
  const { setheaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Done Recipes', search: false });
  }, [setheaderTitle]);

  return (
    <>
      <Header />
      <main>DoneRecipes</main>
    </>
  );
}

export default DoneRecipes;

import React, { useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import CardMain from '../components/CardMain';

function Drinks() {
  const { setheaderTitle, recipesAPIReturn } = useContext(GlobalContext);
  const [recipes, setRecipes] = useState('');

  const renderCard = (data) => data
    .map((response, index) => {
      const number = 12;
      return index < number && <CardMain
        key={ index }
        index={ index }
        cardInfo={ response }
      />;
    });

  useEffect(() => {
    setheaderTitle({ title: 'Drinks', search: true });
  }, [setheaderTitle]);

  useEffect(() => {
    if (recipesAPIReturn.drinks) {
      setRecipes(renderCard(recipesAPIReturn.drinks));
    }
  }, [recipesAPIReturn]);
  return (
    <>
      <Header />
      <main>drinks</main>
      { recipes }
    </>
  );
}

export default Drinks;

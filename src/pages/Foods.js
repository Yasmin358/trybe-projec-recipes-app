import React, { useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import CardMain from '../components/CardMain';

function Foods() {
  const { setheaderTitle, recipesAPIReturn } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Foods', search: true });
  }, [setheaderTitle]);
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
    if (recipesAPIReturn.meals) {
      setRecipes(renderCard(recipesAPIReturn.meals));
    }
  }, [recipesAPIReturn]);

  return (
    <>
      <Header />
      <main>Foods</main>
      { recipes }
    </>
  );
}

export default Foods;

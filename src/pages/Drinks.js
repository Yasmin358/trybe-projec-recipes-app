import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const maxItems = 12;

function Drinks() {
  const { setheaderTitle, apiDrinks } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Drinks', search: true });
  }, [setheaderTitle]);

  return (
    <>
      <Header />
      <main className="main">
        {apiDrinks.map((food, index) => (
          index < maxItems
          && <Card
            key={ food.idMeal }
            testid={ `${index}-recipe-card` }
            imagem={ food.strDrinkThumb }
            name={ food.strDrink }
            index={ index }
          />
        ))}
      </main>
    </>
  );
}

export default Drinks;

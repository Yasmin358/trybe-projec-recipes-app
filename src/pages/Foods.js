import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const maxItems = 12;

function Foods() {
  const { setheaderTitle, apiFoods } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Foods', search: true });
  }, [setheaderTitle]);
  console.log(apiFoods);
  return (
    <>
      <Header />
      <main className="main">
        {apiFoods.map((food, index) => (
          index < maxItems
          && <Card
            key={ food.idMeal }
            testid={ `${index}-recipe-card` }
            imagem={ food.strMealThumb }
            name={ food.strMeal }
            index={ index }
          />
        ))}
      </main>
    </>
  );
}

export default Foods;

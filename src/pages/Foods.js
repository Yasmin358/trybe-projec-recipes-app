import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Category from '../components/Category';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const maxItems = 12;
const maxCategorys = 5;

function Foods() {
  const { setheaderTitle, apiFoods, apiFoodsCategory } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Foods', search: true });
  }, [setheaderTitle]);

  return (
    <>
      <Header />
      <main className="main">
        <div className="category">
          {apiFoodsCategory.map((category, index) => (
            index < maxCategorys
          && <Category
            key={ category.strCategory }
            categoryName={ category.strCategory }
          />
          ))}
        </div>
        <div className="products">
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
        </div>
      </main>
    </>
  );
}

export default Foods;

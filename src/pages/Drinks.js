import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Category from '../components/Category';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const maxItems = 12;
const maxCategorys = 5;

function Drinks() {
  const { setheaderTitle, apiDrinks, apiDrinksCategory } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Drinks', search: true });
  }, [setheaderTitle]);

  return (
    <>
      <Header />
      <main className="main">
        <div className="category">
          {apiDrinksCategory.map((category, index) => (
            index < maxCategorys
          && <Category
            key={ category.strCategory }
            categoryName={ category.strCategory }
          />
          ))}
        </div>
        <div className="products">
          {apiDrinks.map((food, index) => (
            index < maxItems
          && <Card
            key={ food.strDrink }
            testid={ `${index}-recipe-card` }
            imagem={ food.strDrinkThumb }
            name={ food.strDrink }
            index={ index }
          />
          ))}
        </div>
      </main>
    </>
  );
}

export default Drinks;

import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Category from '../components/Category';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

const maxItems = 12;
const maxCategorys = 5;

function Drinks() {
  const { apiDrinks,
    apiDrinksCategory,
    filterHandleClick,
    setheaderTitle } = useContext(GlobalContext);

  useEffect(() => {
    setheaderTitle({ title: 'Drinks', search: true });
  }, [setheaderTitle]);

  console.log(apiDrinks);
  return (
    <>
      <Header />
      <main className="main">
        <div className="category">
          <button
            name="All"
            type="button"
            data-testid="All-category-filter"
            onClick={ filterHandleClick }
          >
            All

          </button>
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
            key={ food.idDrink }
            id={ food.idDrink }
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

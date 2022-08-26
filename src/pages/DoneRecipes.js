import React, { useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';
import CardDoneRecipes from '../components/CardDoneRecipes';

function DoneRecipes() {
  const getFromLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  const { setheaderTitle } = useContext(GlobalContext);
  const [currentDones, setcurrentDones] = useState(getFromLocalStorage);

  // const recipeData = [{
  //   id: 52771,
  //   type: 'food',
  //   nationality: 'Italian',
  //   category: 'Vegetarian',
  //   alcoholicOrNot: '',
  //   name: 'Spicy Arrabiata Penne',
  //   image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  //   doneDate: 'data',
  //   tags: ['Pasta', 'Curry'],
  // },
  // {
  //   id: 178319,
  //   type: 'drink',
  //   nationality: null,
  //   category: 'Cocktail',
  //   alcoholicOrNot: 'Alcoholic',
  //   name: 'Aquamarine',
  //   image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  //   doneDate: 'data',
  //   tags: null,
  // }];

  // localStorage.setItem('doneRecipes', JSON.stringify(recipeData));

  // const desconstruction = Object(getFromLocalStorage);

  useEffect(() => {
    setheaderTitle({ title: 'Done Recipes', search: false });
  }, [setheaderTitle]);

  const handleFilterBtn = (type = false) => {
    if (!type) {
      return setcurrentDones(getFromLocalStorage);
    }
    // const favs = getFavoritesFromLocalStorage();
    const filteredDones = getFromLocalStorage.filter((el) => el.type === type);
    // console.log(filteredDones);
    if (filteredDones.length > 0) return setcurrentDones(filteredDones);
    setcurrentDones(false);
  };

  return (
    <>
      <Header />
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => handleFilterBtn() }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => handleFilterBtn('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => handleFilterBtn('drink') }
        >
          Drinks
        </button>
      </section>
      { currentDones?.map((recipe, index) => (
        <CardDoneRecipes
          key={ index }
          type={ recipe.type }
          nacionalidade={ recipe.nationality }
          imagem={ recipe.image }
          name={ recipe.name }
          index={ index }
          tag={ recipe.tags }
          category={ recipe.category }
          alcoholic={ recipe.alcoholicOrNot }
          feitoEm={ recipe.doneDate }
          id={ recipe.id }
        />
      ))}
    </>
  );
}

export default DoneRecipes;

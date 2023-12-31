import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { recipes } from '../services/themealdb';
import shareIcon from '../images/shareIcon.svg';
import GlobalContext from '../context/GlobalContext';
import { objectFilter } from '../helperFuncions';
import ButtonFavorite from '../components/ButtonFavorite';

function RecipeInProgress(props) {
  // const { recipe, setRecipe, favorite, setFavorite } = useContext(GlobalContext);
  const { setFavorite } = useContext(GlobalContext);
  const [pageData, setPageData] = useState({});
  const [ingredients, setIngredients] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [recipe, setRecipe] = useState({});
  const [recipesInProgress, setRecipesInProgress] = useState(
    { cocktails: [], meals: [] },
  );
  // segunda coisa, Chamar a API
  const callApi = async (url) => {
    const response = await recipes(url);
    const ing = objectFilter(response[0],
      (key, value) => key.includes('strIngredient') && value);
    setRecipe(response[0]);
    setIngredients(ing);
  };

  useEffect(() => {
    let name = '';
    const { match: { params: { id } }, history } = props;
    if (history.location.pathname.includes('foods')) {
      name = 'meals';
    } else { name = 'cocktails'; }
    const baseIngredients = Object.keys(ingredients).length;
    const stepsFinish = recipesInProgress[name][id];
    if (stepsFinish) {
      if (baseIngredients === stepsFinish.length) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [recipesInProgress, props, ingredients]);

  const handlePageData = (id, name) => {
    const page = {
      id,
      page: name,
    };
    setPageData(page);
  };

  // DID MOUNT
  useEffect(() => {
    const { match: { params: { id } }, history } = props;
    const getLocalStorage = localStorage.getItem('inProgressRecipes');
    let name = '';
    if (getLocalStorage) {
      const converted = JSON.parse(getLocalStorage);
      setRecipesInProgress({ ...converted }); // PEGO MEU LOCAL STORAGE E SALVO EM MEU ESTADO LOCAL
      if (history.location.pathname.includes('foods')) {
        name = 'meals';
      } else { name = 'cocktails'; }
      handlePageData(id, name);
    } else if (history.location.pathname.includes('foods')) { // CASO NAO TENHA LOCAL STORAGE CRIO MEU PRIMEIRO LOCAL STORAGE
      name = 'meals';
      const thisRecipe = { [name]: { [id]: [] }, cocktails: {} };
      handlePageData(id, name);
      setRecipesInProgress(thisRecipe);// CRIO MEU ESTADO LOCAL INICIANDO POR FOODS
      localStorage.setItem('inProgressRecipes', JSON.stringify(thisRecipe));// CRIO MEU LOCAL STORAGE
    } else {
      name = 'cocktails';
      const thisRecipe = {
        [name]: { [id]: [] },
        cocktails: {},
      };
      handlePageData(id, name);
      setRecipesInProgress(thisRecipe);// CRIO MEU ESTADO LOCAL INICIANDO POR DRINKS
      localStorage.setItem('inProgressRecipes', JSON.stringify(thisRecipe));// CRIO MEU LOCAL STORAGE
    }
    const route = history.location.pathname.split(/\b/, 2).at(1);
    const url = `https://www.the${route === 'foods' ? 'meal' : 'cocktail'}db.com/api/json/v1/1/lookup.php?i=${id}`;
    callApi(url);
  }, [props, setFavorite]);

  const handleShareBtn = () => {
    const ONE_HALF_SEC = 1500;
    const url = document.URL.split('/in-progress')[0];
    clipboardCopy(url);
    document.querySelector('.link-copied').classList.toggle('hidden');
    setTimeout(() => {
      document.querySelector('.link-copied').classList.toggle('hidden');
    }, ONE_HALF_SEC);
  };

  const handleChecked = (event) => {
    const arrayAnterior = recipesInProgress[pageData.page][pageData.id];
    const objAnterior = { ...recipesInProgress };
    let obj = {};
    if (event.target.checked) {
      if (arrayAnterior) {
        obj = {
          [pageData.id]: [...arrayAnterior, event.target.name],
        };
      } else {
        obj = {
          [pageData.id]: [event.target.name],
        };
      }
    } else {
      const removePostion = arrayAnterior.indexOf(event.target.name);
      const newArray = [...arrayAnterior];
      newArray.splice(removePostion, 1);
      obj = {
        [pageData.id]: newArray,
      };
    }
    const payload = { ...objAnterior, [pageData.page]: obj };
    setRecipesInProgress(payload);
    localStorage.setItem('inProgressRecipes', JSON.stringify(payload));
  };

  const finishRecipe = () => {
    const { history } = props;
    history.push('/done-recipes');
  };

  const { match, history } = props;

  return (
    <div>
      <img
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
        alt="none"
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        {recipe.strMeal || recipe.strDrink}
      </h1>
      <p className="hidden link-copied">Link copied!</p>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ handleShareBtn }
      >
        <img src={ shareIcon } alt="share icon" />
      </button>
      <ButtonFavorite
        historyP={ history }
        matchP={ match }
      />
      <ol data-testid="recipe-category">
        {Object.entries(ingredients).map((ingredient, index) => (
          <li
            key={ ingredient[0] }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              type="checkbox"
              name={ ingredient[1] }
              id={ ingredient[0] }
              onChange={ handleChecked }
              checked={ recipesInProgress[pageData.page][pageData.id]
                ? recipesInProgress[pageData.page][pageData.id]
                  .includes(ingredient[1]) : false }
            />
            <label htmlFor={ ingredient[0] }>
              {ingredient[1]}
            </label>
          </li>
        ))}
      </ol>
      <p data-testid="instructions">{recipe.strInstructions}</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ disabled }
        onClick={ finishRecipe }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

RecipeInProgress.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecipeInProgress;

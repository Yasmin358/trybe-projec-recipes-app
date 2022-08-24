import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import DetailsCard from '../components/DetailsCard';
import RecomendationCard from '../components/RecomendationCard';
import { objectFilter } from '../helperFuncions';
import shareIcon from '../images/shareIcon.svg';
import favIcon from '../images/whiteHeartIcon.svg';

function RecipeDetails(props) {
  const { match: { params: { id } }, history } = props;
  const { pathname } = history.location; //   /foods/2344323 ['/', 'foods']
  // \b significa "word boundary": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet#:~:text=Matches%20a%20word,Character%20Classes.
  const route = pathname.split(/\b/, 2).at(1);
  const url = `https://www.the${
    route === 'foods' ? 'meal' : 'cocktail'
  }db.com/api/json/v1/1/lookup.php?i=${id}`;

  const [recipe, setRecipe] = useState('');

  // Chamada da API realizada na montagem deste componente:
  // TODO: Ajustar este fetch depois da atualizalação dos requisitos anteriores
  useEffect(() => {
    // Para carregar os detalhes da receita:
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data[`${route === 'foods' ? 'meals' : 'drinks'}`].at(0));
      })
      .catch((err) => console.error(`SOMETHING WENT WRONG 💣💣💣: ${err}`));

    // Para atualizar o texto do botão:
  }, [url, route, id]);

  const toogleStartButn = () => {
    const done = localStorage.getItem('doneRecipes');
    const match = JSON.parse(done)?.find((el) => Number(el.id) === Number(id));
    if (match) return 'hidden';
    return '';
  };

  const renderBtnText = () => {
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const idsObj = { ...inProgress?.cocktails, ...inProgress?.meals };
    if (!idsObj) return 'Start Recipe';
    const match = objectFilter(idsObj, (key) => key === id);
    if (Object.entries(match).length > 0) return 'Continue Recipe';
    return 'Start Recipe';
  };

  const handleShareBtn = () => {
    const ONE_HALF_SEC = 1500;
    clipboardCopy(document.URL);
    document.querySelector('.link-copied').classList.toggle('hidden');
    setTimeout(() => {
      document.querySelector('.link-copied').classList.toggle('hidden');
    }, ONE_HALF_SEC);
  };

  const handleFavBtn = () => {
    console.log(recipe);
    const { strArea, strCategory, strMeal,
      strDrink, strMealThumb, strDrinkThumb, strAlcoholic } = recipe;
    const data = [{
      id,
      type: route.slice(route.at(-1), route.length - 1),
      nationality: strArea || '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic || '',
      name: strMeal || strDrink,
      image: strMealThumb || strDrinkThumb,
    }];
    const oldFavs = localStorage.getItem('favoriteRecipes');
    if (!oldFavs) return localStorage.setItem('favoriteRecipes', JSON.stringify(data));

    const newFavs = [...JSON.parse(oldFavs), ...data];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavs));
  };

  return (
    recipe
    && (
      <>
        <DetailsCard { ...recipe } />
        <p className="hidden link-copied">Link copied!</p>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ handleShareBtn }
        >
          <img src={ shareIcon } alt="share icon" />
        </button>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ handleFavBtn }
        >
          <img src={ favIcon } alt="share icon" />
        </button>
        <RecomendationCard />
        <Link to={ `/${route}/${id}/in-progress` }>
          <button
            type="button"
            className={ `${toogleStartButn()} btn btn--start` }
            data-testid="start-recipe-btn"
          >
            { renderBtnText() }
          </button>
        </Link>
      </>
    )
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecipeDetails;

import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import favIconWhite from '../images/whiteHeartIcon.svg';
import favIconBlack from '../images/blackHeartIcon.svg';
import checkIfRecipeIsFav from '../utils/checkRecipe';
import GlobalContext from '../context/GlobalContext';

function ButtonFavorite(props) {
  const { favorite, setFavorite } = useContext(GlobalContext);

  const handleFavBtn = () => {
    const { matchP: { params: { id } }, historyP } = props;
    const route = historyP.location.pathname.split(/\b/, 2).at(1);
    const isFavorite = checkIfRecipeIsFav(setFavorite, id);
    if (isFavorite) {
      const favs = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const newFavs = favs.filter((el) => el.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavs));
      return setFavorite(false);
    }

    const MINUS_ONE = -1;
    const { strArea, strCategory, strMeal,
      strDrink, strMealThumb, strDrinkThumb, strAlcoholic } = recipe;
    const data = [{
      id,
      type: route.slice(route.at(MINUS_ONE), route.length - 1),
      nationality: strArea || '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic || '',
      name: strMeal || strDrink,
      image: strMealThumb || strDrinkThumb,
    }];
    const oldFavs = localStorage.getItem('favoriteRecipes');
    if (!oldFavs) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(data));
      return setFavorite(true);
    }
    const yetAnotherFavs = [...JSON.parse(oldFavs), ...data];
    localStorage.setItem('favoriteRecipes', JSON.stringify(yetAnotherFavs));
    setFavorite(true);
  };

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ handleFavBtn }
      src={ favorite ? favIconBlack : favIconWhite }
    >
      <img src={ favorite ? favIconBlack : favIconWhite } alt="share icon" />
    </button>
  );
}

ButtonFavorite.propTypes = {
  matchP: PropTypes.objectOf(PropTypes.any).isRequired,
  historyP: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ButtonFavorite;

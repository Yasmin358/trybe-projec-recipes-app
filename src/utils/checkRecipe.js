const checkIfRecipeIsFav = (setFavoriteFunc, id2) => {
  const oldFavs = localStorage.getItem('favoriteRecipes');
  if (!oldFavs) {
    setFavoriteFunc(false);
    return false;
  }
  const match = JSON.parse(oldFavs).find((el) => Number(el.id) === Number(id2));
  if (match) {
    setFavoriteFunc(true);
    return true;
  }
  setFavoriteFunc(false);
  return false;
};

export default checkIfRecipeIsFav;

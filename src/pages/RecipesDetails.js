import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../components/DetailsCard';
import RecomendationCard from '../components/RecomendationCard';

function RecipesDetails(props) {
  const { match: { params: { id } }, history } = props;
  const { pathname } = history.location;
  // \b significa "word boundary": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet#:~:text=Matches%20a%20word,Character%20Classes.
  const route = pathname.split(/\b/, 2).at(1);
  const url = `https://www.the${
    route === 'foods' ? 'meal' : 'cocktail'
  }db.com/api/json/v1/1/lookup.php?i=${id}`;

  const [recipe, setRecipe] = useState('');

  // Chamada da API realizada na montagem deste componente:
  // TODO: Ajustar este fetch depois da atualizalação dos requisitos anteriores
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipe(data[`${route === 'foods' ? 'meals' : 'drinks'}`].at(0)))
      .catch((err) => console.error(`SOMETHING WENT WRONG 💣💣💣: ${err}`));
  }, [url, route]);

  return (
    recipe
    && (
      <>
        <DetailsCard { ...recipe } />
        <RecomendationCard />
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="btn btn--start"
        >
          Start Recipe

        </button>
      </>
    )
  );
}

RecipesDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecipesDetails;

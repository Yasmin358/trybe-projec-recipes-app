import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipe(data.drinks.at(0)))
      .catch((err) => console.error(`SOMETHING WENT WRONG 💣💣💣: ${err}`));
  }, [url]);

  return (
    <main>RecipesDetails</main>
  );
}

RecipesDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecipesDetails;

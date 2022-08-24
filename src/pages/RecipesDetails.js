import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DetailsCard from '../components/DetailsCard';
import RecomendationCard from '../components/RecomendationCard';
import { objectFilter } from '../helperFuncions';

function RecipesDetails(props) {
  const { match: { params: { id } }, history } = props;
  const { pathname } = history.location; //   /foods/2344323 ['/', 'foods']
  // \b significa "word boundary": https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet#:~:text=Matches%20a%20word,Character%20Classes.
  const route = pathname.split(/\b/, 2).at(1);
  const url = `https://www.the${
    route === 'foods' ? 'meal' : 'cocktail'
  }db.com/api/json/v1/1/lookup.php?i=${id}`;

  const [recipe, setRecipe] = useState('');
  const [btnText, setBtnText] = useState('');

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
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const idsObj = { ...inProgress?.cocktails, ...inProgress?.meals };
    if (!idsObj) return setBtnText('Start Recipe');
    const match = objectFilter(idsObj, (key) => key === id);
    if (match) return setBtnText('Continue Recipe');
    setBtnText('Start Recipe');
  }, [url, route, id]);

  const toogleStartButn = () => {
    const done = localStorage.getItem('doneRecipes');
    const match = JSON.parse(done)?.find((el) => Number(el.id) === Number(id));
    if (match) return 'hidden';
    return '';
  };

  return (
    recipe
    && (
      <>
        <DetailsCard { ...recipe } />
        <RecomendationCard />
        <button
          type="button"
          className={ `${toogleStartButn()} btn btn--start` }
          data-testid="start-recipe-btn"
        >
          { btnText }
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

// Para testes:
/*
{
    cocktails: {
        id-da-bebida: [lista-de-ingredientes-utilizados],
        ...
    },
    meals: {
        id-da-comida: [lista-de-ingredientes-utilizados],
        ...
    }
}
*/

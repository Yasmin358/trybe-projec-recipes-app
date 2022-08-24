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

// Para testes:
/*
localStorage.setItem('doneRecipes', JSON.stringify(
  [{
    id: 52771,
    type: 'comida-ou-bebida',
    nationality: 'nacionalidade-da-receita-ou-texto-vazio',
    category: 'categoria-da-receita-ou-texto-vazio',
    alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
    name: 'nome-da-receita',
    image: 'imagem-da-receita',
    doneDate: 'quando-a-receita-foi-concluida',
    tags: 'array-de-tags-da-receita-ou-array-vazio',
  },
  {
    id: 52773,
    type: 'comida-ou-bebida',
    nationality: 'nacionalidade-da-receita-ou-texto-vazio',
    category: 'categoria-da-receita-ou-texto-vazio',
    alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
    name: 'nome-da-receita',
    image: 'imagem-da-receita',
    doneDate: 'quando-a-receita-foi-concluida',
    tags: 'array-de-tags-da-receita-ou-array-vazio',
  },
  {
    id: 52772,
    type: 'comida-ou-bebida',
    nationality: 'nacionalidade-da-receita-ou-texto-vazio',
    category: 'categoria-da-receita-ou-texto-vazio',
    alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
    name: 'nome-da-receita',
    image: 'imagem-da-receita',
    doneDate: 'quando-a-receita-foi-concluida',
    tags: 'array-de-tags-da-receita-ou-array-vazio',
  },

  ],
));
*/

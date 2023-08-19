import React, { useEffect, useState } from 'react';
import Recomendation from './Recomendation';

function RecomendationCard() {
  const { pathname } = document.location;
  const route = pathname.split(/\b/, 2).at(1);
  const url = `https://www.the${
    route === 'foods' ? 'cocktail' : 'meal'
  }db.com/api/json/v1/1/search.php?s=`;

  const [recipes, setRecipes] = useState('');

  // Esta requisição a API visa pegar todos as comidas ou bebidas.
  // TODO: Deve ser refatorado após o merge com os requisitos anteriores
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipes(
        data[`${route === 'foods' ? 'drinks' : 'meals'}`],
      ))
      .catch((err) => console.error(`SOMETHING WENT WRONG 🤯🤯🤯: ${err}`));
  }, [url, route]);

  const renderCards = (recipesObj) => {
    const SIX = 6;
    const recommends = [];
    recipesObj.forEach((rec, i) => { if (i < SIX) recommends.push(rec); });
    return recommends.map((rec, i) => (
      <Recomendation
        key={ i }
        index={ i }
        item={ rec }
      />
    ));
  };

  return (
    <section className="recomendation-container">
      { recipes && renderCards(recipes)}
    </section>
  );
}

export default RecomendationCard;

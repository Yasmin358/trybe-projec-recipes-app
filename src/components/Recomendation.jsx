import React from 'react';
import PropTypes from 'prop-types';

function Recomendation(props) {
  const { index, item } = props;

  return (
    <figure
      data-testid={ `${index}-recomendation-card` }
      key={ `${item.idMeal}${index}` || `${item.idDrinks}${index}` }
      className={ index > 1 ? 'hidden' : '' }
    >
      <img
        src={ item.strMealThumb || item.strDrinkThumb }
        alt={ item.strMeal || item.strDrink }
      />
      <h4 data-testid={ `${index}-recomendation-title` }>
        {item.strMeal || item.strDrink }
      </h4>
      <p>{item.strCategory || item.strAlcoholic }</p>
    </figure>
  );
}

Recomendation.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Recomendation;

import PropTypes from 'prop-types';
import React from 'react';

function Card(props) {
  const { imagem, name, index, testid } = props;
  // console.log(imagem);
  return (
    <div data-testid={ testid }>
      <h3 data-testid={ `${index}-card-name` }>{name}</h3>
      <img src={ imagem } alt={ name } data-testid={ `${index}-card-img` } />
    </div>
  );
}

Card.propTypes = {
  imagem: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default Card;

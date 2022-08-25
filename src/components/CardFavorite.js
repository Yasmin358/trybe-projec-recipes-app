import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import favIconBlack from '../images/blackHeartIcon.svg';

function CardFavorite(props) {
  const { props: favArray } = props;
  console.log(favArray);

  const renderFavoritesCards = (favs) => {
    const markup = (array) => array.map((el, index) => (
      <figure key={ el.id }>
        <img
          src={ el.image }
          alt={ el.name }
          data-testid={ `${index}-horizontal-image` }
        />
        <p data-testid={ `${index}-horizontal-name` }>{el.name}</p>
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${el.nationality} - ${el.category}`}

        </p>
        <p>{el.nationality}</p>
        <button
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon } // POR CAUSA DO CYPRESS!
        >
          <img src={ shareIcon } alt="share icon" />

        </button>
        <button
          type="button"
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ favIconBlack } // POR CAUSA DO CYPRESS!
        >
          <img src={ favIconBlack } alt="share icon" />

        </button>
      </figure>
    ));
    return markup(favs);
  };

  return (
    <>
      { renderFavoritesCards(favArray)}
    </>
  );
}

CardFavorite.propTypes = {
  props: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CardFavorite;

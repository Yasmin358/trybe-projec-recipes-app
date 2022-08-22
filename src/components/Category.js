import PropTypes from 'prop-types';
import React from 'react';

function Category(props) {
  const { categoryName } = props;
  return (
    <div>
      <button
        type="button"
        data-testid={ `${categoryName}-category-filter` }
      >
        {categoryName}
      </button>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default Category;

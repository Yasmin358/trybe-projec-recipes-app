// import React from 'react';
// import { string, number, object } from 'prop-types';

// function CardMain(props) {
//   const { index, cardInfo } = props;

//   const { strMealThumb, strMeal, strDrinkThumb, strDrink } = cardInfo;
//   return (
//     <div data-testid={ `${index}-recipe-card` }>
//       <img
//         data-testid={ `${index}-card-img` }
//         alt={ strMeal || strDrink }
//         src={ strMealThumb || strDrinkThumb }
//       />
//       <div data-testid={ `${index}-card-name` }>{ strMeal || strDrink }</div>
//     </div>
//   );
// }

// CardMain.propTypes = {
//   strMealThumb: string,
//   strMeal: string,
//   strDrinkThumb: string,
//   strDrink: string,
//   index: number,
//   cardInfo: object,
// }.isRequired;

// export default CardMain;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

function Card({ infoRecipe, index }) {
  const { apiFilter } = useContext(RecipesContext);

  const card = (picRecipe, nameRecipe) => (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        alt="recipe-pic"
        src={ picRecipe }
      />
      <p data-testid={ `${index}-card-name` }>
        { nameRecipe }
      </p>
    </div>
  );

  if (apiFilter === 'Foods') {
    const { strMealThumb, strMeal } = infoRecipe;
    const picRecipe = strMealThumb;
    const nameRecipe = strMeal;
    console.log('comida');
    return (
      card(picRecipe, nameRecipe)
    );
  } if (apiFilter === 'Drinks') {
    const { strDrinkThumb, strDrink } = infoRecipe;
    const picRecipe = strDrinkThumb;
    const nameRecipe = strDrink;
    return (
      card(picRecipe, nameRecipe)
    );
  }
}

Card.propTypes = {
  strMealThumb: PropTypes.string,
  strMeal: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default Card;

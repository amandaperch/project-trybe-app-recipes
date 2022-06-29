import React from 'react';
import PropTypes from 'prop-types';

function FavoriteCard({ infoRecipe, index }) {
  if (infoRecipe.type === 'food') {
    const { name, nationality, category, image } = infoRecipe;
    return (
      <div>
        <img
          width="150px"
          data-testid={ `${index}-horizontal-image` }
          alt="recipe-pic"
          src={ image }
        />
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${nationality} - ${category}`}
        </p>
        <p data-testid={ `${index}-horizontal-name` }>{name}</p>
      </div>
    );
  }
  if (infoRecipe.type === 'drink') {
    const { name, alcoholicOrNot, image } = infoRecipe;
    return (
      <div>
        <img
          width="150px"
          data-testid={ `${index}-horizontal-image` }
          alt="recipe-pic"
          src={ image }
        />
        <p data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</p>
        <p data-testid={ `${index}-horizontal-name` }>{name}</p>
      </div>
    );
  }
  return null;
}

FavoriteCard.propTypes = {
  strMealThumb: PropTypes.string,
  strMeal: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default FavoriteCard;

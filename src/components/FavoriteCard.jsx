import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

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
        <button type="button">
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            alt="share-btn"
            src={ shareIcon }
          />
        </button>
        <button type="button">
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            alt="favorite-btn"
            src={ blackHeartIcon }
          />
        </button>
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
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          alt="share-btn"
          src={ shareIcon }
        />
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          alt="favorite-btn"
          src={ blackHeartIcon }
        />
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

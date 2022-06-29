import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteCard({ infoRecipe, index }) {
  const shareAndFavIcons = (recipeIndex) => (
    <div>
      <button type="button">
        <img
          data-testid={ `${recipeIndex}-horizontal-share-btn` }
          alt="share-btn"
          src={ shareIcon }
        />
      </button>
      <button type="button">
        <img
          data-testid={ `${recipeIndex}-horizontal-favorite-btn` }
          alt="favorite-btn"
          src={ blackHeartIcon }
        />
      </button>
    </div>);

  if (infoRecipe.type === 'food') {
    const { name, nationality, category, image, id } = infoRecipe;
    return (
      <div>
        <Link to={ `/foods/${id}` }>
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
        </Link>
        {shareAndFavIcons(index)}
      </div>
    );
  }
  if (infoRecipe.type === 'drink') {
    const { name, alcoholicOrNot, image, id } = infoRecipe;
    return (
      <div>
        <Link to={ `/drinks/${id}` }>
          <img
            width="150px"
            data-testid={ `${index}-horizontal-image` }
            alt="recipe-pic"
            src={ image }
          />
          <p data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</p>
          <p data-testid={ `${index}-horizontal-name` }>{name}</p>
        </Link>
        {shareAndFavIcons(index)}
      </div>
    );
  }
  return null;
}

FavoriteCard.propTypes = {
  index: PropTypes.number,
  infoRecipe: PropTypes.shape({
    name: PropTypes.string,
    nationality: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
  }),
}.isRequired;

export default FavoriteCard;

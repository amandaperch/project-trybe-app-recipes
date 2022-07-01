import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { unfavoriteFromLocalStorage } from '../helpers/LocalStorage';
import RecipesContext from '../context/RecipesContext';
import '../CSS/FavoriteCard.css';
import '../CSS/FoodsDetails.css';

const THREE_SECONDS = 3000;

function FavoriteCard({ infoRecipe, index }) {
  const [copiedMsg, setCopiedMsg] = useState(null);
  const { setFavoriteRecipes } = useContext(RecipesContext);

  const copyUrlToClipboard = (recipeType, recipeId) => {
    // fonte: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
    // fonte: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
    navigator.clipboard.writeText(`http://localhost:3000/${recipeType}/${recipeId}`);
    setCopiedMsg('Link copied!');
    setTimeout(() => {
      setCopiedMsg(null);
    }, THREE_SECONDS);
  };

  const shareAndFavIcons = (recipeIndex, recipeType, recipeId) => (
    <div>
      <button
        className="btnRecipes"
        type="button"
        onClick={ () => copyUrlToClipboard(recipeType, recipeId) }
      >
        <img
          data-testid={ `${recipeIndex}-horizontal-share-btn` }
          alt="share-btn"
          src={ shareIcon }
        />
      </button>
      <button
        className="btnRecipes"
        type="button"
        onClick={ () => setFavoriteRecipes(unfavoriteFromLocalStorage(recipeId)) }
      >
        <img
          data-testid={ `${recipeIndex}-horizontal-favorite-btn` }
          alt="favorite-btn"
          src={ blackHeartIcon }
        />
      </button>
      {copiedMsg && <span>{copiedMsg}</span>}
    </div>);

  if (infoRecipe.type === 'food') {
    const { name, nationality, category, image, id } = infoRecipe;
    return (
      <div className="favorite-card">
        <Link to={ `/foods/${id}` }>
          <img
            className="fav-recipe-pic"
            data-testid={ `${index}-horizontal-image` }
            alt="recipe-pic"
            src={ image }
          />
        </Link>
        <div className="favorite-card-right">
          <p
            className="favorite-text"
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${nationality} - ${category}`}
          </p>
          <Link to={ `/foods/${id}` }>
            <p
              className="favorite-text-name"
              data-testid={ `${index}-horizontal-name` }
            >
              {name}

            </p>
          </Link>
          <div className="favorite-btn-container">
            {shareAndFavIcons(index, 'foods', id)}
          </div>
        </div>
      </div>
    );
  }
  if (infoRecipe.type === 'drink') {
    const { name, alcoholicOrNot, image, id } = infoRecipe;
    return (
      <div className="favorite-card">
        <Link to={ `/drinks/${id}` }>
          <img
            className="fav-recipe-pic"
            data-testid={ `${index}-horizontal-image` }
            alt="recipe-pic"
            src={ image }
          />
        </Link>
        <div className="favorite-card-right">
          <p
            className="favorite-text"
            data-testid={ `${index}-horizontal-top-text` }
          >
            {alcoholicOrNot}

          </p>
          <Link to={ `/drinks/${id}` }>
            <p
              className="favorite-text-name"
              data-testid={ `${index}-horizontal-name` }
            >
              {name}

            </p>
          </Link>
          <div className="favorite-btn-container">
            {shareAndFavIcons(index, 'drinks', id)}
          </div>
        </div>
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

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function ExploreFoods() {
  const { data } = useContext(RecipesContext);

  const randomRecipePath = () => {
    if (data.length !== 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      return `/foods/${data[randomIndex].idMeal}`;
    }
  };

  return (
    <div>
      <Header pageTitle="Explore Foods" />
      <Link to="/explore/foods/ingredients">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient
        </button>
      </Link>
      <Link to="/explore/foods/nationalities">
        <button
          type="button"
          data-testid="explore-by-nationality"
        >
          By Nationality
        </button>
      </Link>
      <Link to={ randomRecipePath() }>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreFoods;

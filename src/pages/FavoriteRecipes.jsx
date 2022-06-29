import React from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  return (
    <div>
      <Header pageTitle="Favorite Recipes" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      {favoriteRecipes && favoriteRecipes.map((favRecipe) => (
        <FavoriteCard key={ favRecipe.id } infoRecipe={ favRecipe } />
      ))}
    </div>
  );
}

export default FavoriteRecipes;

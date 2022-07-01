import React, { useState, useContext } from 'react';
import FavoriteCard from '../components/FavoriteCard';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import '../CSS/ListRecipes.css';

function FavoriteRecipes() {
  const [filter, setFilter] = useState('All');
  const { favoriteRecipes } = useContext(RecipesContext);

  return (
    <div className="recipesBackground ">
      <Header pageTitle="Favorite Recipes" />
      <div className="buttonContainerFavorite">
        <button
          className="buttonCategoryFavorite"
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('All') }
        >
          All
        </button>
        <button
          className="buttonCategoryFavorite"
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('Food') }
        >
          Food
        </button>
        <button
          className="buttonCategoryFavorite"
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('Drinks') }
        >
          Drinks
        </button>
      </div>
      {favoriteRecipes
        && favoriteRecipes
          .filter((favRecipe) => {
            if (filter === 'Food') {
              return favRecipe.type === 'food';
            }
            if (filter === 'Drinks') {
              return favRecipe.type === 'drink';
            }
            return favRecipe;
          })
          .map((favRecipe, index) => (
            <FavoriteCard
              key={ favRecipe.id }
              infoRecipe={ favRecipe }
              index={ index }
            />
          ))}
    </div>
  );
}

export default FavoriteRecipes;

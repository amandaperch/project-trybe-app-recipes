import React from 'react';

function FoodDetails() {
  return (
    <>
      <header>
        <img src="" alt="food-icon" data-testid="recipe-photo" />
      </header>
      <main>
        <div>
          <h1 data-testid="recipe-title"> Titulo da Receita </h1>
          <button type="button" data-testid="share-btn">
            <img
              src=""
              alt="share-icon"
            />
            Compartilhar
          </button>
          <button type="button" data-testid="favorite-btn">
            Favorito
          </button>
          <p data-testid="recipe-category"> Categoria </p>
        </div>
        <h2> Ingredientes </h2>
        <div data-testid={ `${index}-ingredient-name-and-measure` }>
          Ingredients
        </div>
        <h2> Istructions </h2>
        <div data-testid="instructions">
          Instructions
        </div>
        { foodRecipe
          ? (
            <>
              <h2> Video </h2>
              <div>
                <source src="/Videos/video1.mp4" data-testid="video" type="video/mp4" />
              </div>
            </>
          ) : null}
        <h2> Recommended </h2>
        <div data-testid={ `${index}-recomendation-card` }>
          Ingredients
        </div>
      </main>
      <button type="button" data-testid="start-recipe-btn"> Start Recipe </button>
    </>
  );
}

export default FoodDetails;

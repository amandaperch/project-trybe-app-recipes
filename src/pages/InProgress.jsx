import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const max = 20;

function InProgress() {
  const [detail, setDetail] = useState('');
  const idReceita = useParams();
  const historyUrl = window.location.href;
  const foodRecipe = historyUrl.includes('foods');
  const drinkRecipe = historyUrl.includes('drinks');

  const foodDetail = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const { meals } = await fetch(`${url}${idReceita.idReceita}`)
      .then((response) => response.json());
    setDetail(meals[0]);
  }, [idReceita]);

  const drinkDetail = useCallback(async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const { drinks } = await fetch(`${url}${idReceita.idReceita}`)
      .then((response) => response.json());
    setDetail(drinks[0]);
  }, [idReceita]);

  useEffect(() => {
    if (foodRecipe) {
      foodDetail();
    } else if (drinkRecipe) {
      drinkDetail();
    }
  }, [foodRecipe, foodDetail, drinkDetail, drinkRecipe]);

  const ingredients = [];
  for (let index = 1; index <= max && detail; index += 1) {
    console.log(detail, 'xablau');
    if (detail[`strIngredient${index}`]) {
      ingredients.push(
        `- ${detail[`strIngredient${index}`]} - ${detail[`strMeasure${index}`]}`,
      );
    }
  }

  return (
    <>
      { detail && (
        <>
          <header>
            <img
              src={ foodRecipe ? (detail.strMealThumb) : detail.strDrinkThumb }
              alt="food-icon"
              data-testid="recipe-photo"
            />
          </header>
          <main>
            <div>
              <h1 data-testid="recipe-title">
                {foodRecipe
                  ? (
                    detail.strMeal
                  ) : detail.strDrink }
              </h1>
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
              <p data-testid="recipe-category">
                {foodRecipe
                  ? (
                    detail.strCategory
                  ) : detail.strAlcoholic }
              </p>
            </div>
            <h2> Ingredientes </h2>
            {ingredients.map((ingredient) => (
              <div
                data-testid={
                  `${ingredients.indexOf(ingredient)}-ingredient-step`
                }
                key={ ingredients.indexOf(ingredient) }
              >
                <input type="checkbox" id={ ingredient } />
                <label htmlFor={ ingredient }>
                  { ingredient }
                </label>
              </div>))}
            <h2> Istructions </h2>
            <div data-testid="instructions">
              { detail.strInstructions }
            </div>
          </main>
          <button type="button" data-testid="finish-recipe-btn"> Finish Recipe </button>
        </>
      ) }
      {' '}

    </>
  );
}

export default InProgress;

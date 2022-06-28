import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const max = 20;

function FoodInProgress() {
  const [detail, setDetail] = useState('');
  const idReceita = useParams();

  const foodDetail = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const { meals } = await fetch(`${url}${idReceita.idReceita}`)
      .then((response) => response.json());
    setDetail(meals[0]);
  }, [idReceita]);

  useEffect(() => {
    foodDetail();
  }, [foodDetail]);

  const ingredients = [];
  let storage = {};

  for (let index = 1; index <= max && detail; index += 1) {
    if (detail[`strIngredient${index}`]) {
      ingredients.push(
        `${detail[`strIngredient${index}`]} - ${detail[`strMeasure${index}`]}`,
      );
    }
  }

  const localObject = JSON.parse(localStorage.getItem('inProgressRecipes'));
  storage = {
    meals: {
      [idReceita.idReceita]: [],
    },
  };
  if (localObject === null) {
    localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
  }

  const check = () => {
    for (let index = 0;
      index < ingredients.length && detail; index += 1) {
      const box = document.getElementById(ingredients[index]);
      if (box.checked) {
        storage.meals[
          idReceita.idReceita][index] = ingredients[index];
        localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
      } else {
        storage.meals[
          idReceita.idReceita][index] = '';
        localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
      }
    }
  };

  return (
    <>
      { detail && (
        <>
          <header>
            <img
              src={ detail.strMealThumb }
              alt="food-icon"
              data-testid="recipe-photo"
            />
          </header>
          <main>
            <div>
              <h1 data-testid="recipe-title">
                { detail.strMeal }
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
                { detail.strCategory }
              </p>
            </div>
            <h2> Ingredientes </h2>
            { ingredients.map((ingredient, index) => (
              <div
                data-testid={
                  `${ingredients.indexOf(ingredient)}-ingredient-step`
                }
                key={ ingredients.indexOf(ingredient) }
              >
                <input
                  type="checkbox"
                  id={ ingredient }
                  onClick={ () => check() }
                  defaultChecked={
                    localObject.meals[idReceita.idReceita][index] === ingredient
                  }
                />
                <label htmlFor={ ingredient }>
                  -
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
      {''}

    </>
  );
}

export default FoodInProgress;

import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const max = 15;

function DrinkInProgress() {
  const [detail, setDetail] = useState('');
  const idReceita = useParams();

  const drinkDetail = useCallback(async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    const { drinks } = await fetch(`${url}${idReceita.idReceita}`)
      .then((response) => response.json());
    setDetail(drinks[0]);
    console.log(drinks);
  }, [idReceita]);

  useEffect(() => {
    drinkDetail();
  }, [drinkDetail]);

  const ingredients = [];
  let storage = {};

  for (let index = 1; index <= max && detail; index += 1) {
    if (detail[`strIngredient${index}`]) {
      ingredients.push(
        `${detail[`strIngredient${index}`]} - ${detail[`strMeasure${index}`]}`,
      );
    }
  }
  console.log(JSON.parse(localStorage.getItem('inProgressRecipes')));

  const localObject = JSON.parse(localStorage.getItem('inProgressRecipes'));
  storage = {
    cocktails: {
      [idReceita.idReceita]: [],
    },
    meals: {},
  };
  if (localObject === null) {
    localStorage.setItem('inProgressRecipes', JSON.stringify(storage));
  } else if (localObject.cocktails[idReceita.idReceita] === undefined) {
    localObject.cocktails[idReceita.idReceita] = [];
    localStorage.setItem('inProgressRecipes', JSON.stringify(localObject));
  }

  const check = () => {
    for (let index = 0;
      index < ingredients.length && detail; index += 1) {
      const box = document.getElementById(ingredients[index]);
      if (box.checked) {
        localObject.cocktails[idReceita.idReceita][index] = ingredients[index];
        localStorage.setItem('inProgressRecipes', JSON.stringify(localObject));
      } else {
        localObject.cocktails[idReceita.idReceita][index] = '';
        localStorage.setItem('inProgressRecipes', JSON.stringify(localObject));
      }
    }
  };

  return (
    <>
      { detail && (
        <>
          <header>
            <img
              src={ detail.strDrinkThumb }
              alt="food-icon"
              data-testid="recipe-photo"
            />
          </header>
          <main>
            <div>
              <h1 data-testid="recipe-title">
                { detail.strDrink }
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
                { detail.strAlcoholic }
              </p>
            </div>
            <h2> Ingredientes </h2>
            {ingredients.map((ingredient, index) => (
              <div
                data-testid={
                  `${ingredients.indexOf(ingredient)}-ingredient-step`
                }
                key={ ingredients.indexOf(ingredient) }
              >
                <input
                  type="checkbox"
                  id={ ingredient }
                  onChange={ () => check() }
                  defaultChecked={
                    localObject.cocktails[idReceita.idReceita][index] === ingredient
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
      )}
      {''}
    </>
  );
}

export default DrinkInProgress;

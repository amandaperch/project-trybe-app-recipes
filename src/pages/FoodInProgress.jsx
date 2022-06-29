import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';
import BlackHeartIcon from '../images/blackHeartIcon.svg';
import inProgressStorage, { favIcon, favorite } from '../helpers/LocalStorage';

const max = 20;

function FoodInProgress() {
  const [detail, setDetail] = useState('');
  const [shareMessage, setShareMessage] = useState('');
  const [favStatus, setFavStatus] = useState('');
  const idReceita = useParams();
  inProgressStorage(true, [idReceita.idReceita]);

  const foodDetail = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
    const { meals } = await fetch(`${url}${idReceita.idReceita}`)
      .then((response) => response.json());
    setDetail(meals[0]);
  }, [idReceita]);

  useEffect(() => {
    foodDetail();
    setFavStatus(favIcon([idReceita.idReceita]));
  }, [foodDetail, idReceita]);

  const ingredients = [];

  for (let index = 1; index <= max && detail; index += 1) {
    if (detail[`strIngredient${index}`]) {
      ingredients.push(
        `${detail[`strIngredient${index}`]} - ${detail[`strMeasure${index}`]}`,
      );
    }
  }

  const localObject = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const attFav = async () => {
    favorite('Meal', detail);
    setFavStatus(favIcon([idReceita.idReceita]));
  };

  const check = () => {
    for (let index = 0;
      index < ingredients.length && detail; index += 1) {
      const box = document.getElementById(ingredients[index]);
      if (box.checked) {
        localObject.meals[idReceita.idReceita][index] = ingredients[index];
        localStorage.setItem('inProgressRecipes', JSON.stringify(localObject));
      } else {
        localObject.meals[idReceita.idReceita][index] = '';
        localStorage.setItem('inProgressRecipes', JSON.stringify(localObject));
      }
    }
  };

  const ShareFoods = () => {
    const text = `http://localhost:3000/foods/${idReceita.idReceita}`;
    copy(text);
    setShareMessage(true);
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
              <button
                type="button"
                onClick={ () => ShareFoods() }
              >
                <img
                  src={ shareIcon }
                  data-testid="share-btn"
                  alt="share-icon"
                />
              </button>
              <button
                type="button"
                onClick={ () => attFav() }
              >
                <img
                  data-testid="favorite-btn"
                  src={ favStatus ? BlackHeartIcon : WhiteHeartIcon }
                  alt="favorite-icon"
                />
              </button>
              { shareMessage && (
                <h1>Link copied!</h1>
              )}
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

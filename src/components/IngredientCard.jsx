import React from 'react';
import { useHistory } from 'react-router-dom';

function IngredientCard({ infoIngredient, index }) {
  const history = useHistory();
  const card = (ingredientPic, ingredientName) => (
    <div data-testid={ `${index}-ingredient-card` }>
      <img
        data-testid={ `${index}-card-img` }
        alt="ingredient-pic"
        src={ ingredientPic }
        width="200px"
      />
      <p data-testid={ `${index}-card-name` }>
        {ingredientName}
      </p>
    </div>
  );

  if (history.location.pathname.includes('foods')) {
    const { strIngredient } = infoIngredient;
    const ingredientPic = `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`;
    return (
      card(ingredientPic, strIngredient)
    );
  }
  if (history.location.pathname.includes('drinks')) {
    const { strIngredient1 } = infoIngredient;
    const ingredientPic = `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`;
    return (
      card(ingredientPic, strIngredient1)
    );
  }
}

export default IngredientCard;

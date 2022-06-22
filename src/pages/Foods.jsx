import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';

function Food() {
  const food = 'Foods';
  const { data, setApiFilter, category } = useContext(RecipesContext);
  const history = useHistory();

  if (data) {
    if (data.length === 1) {
      history.push(`/foods/${data[0].idMeal}`);
    }
  } else {
    setApiFilter(food);
  }

  return (
    <div>
      <Header pageTitle={ food } btnSearch />
      {!category ? undefined : (
        category.map((categoryName, index) => (
          <button
            key={ index }
            type="button"
            data-testid={ `${categoryName}-category-filter` }
          >
            { categoryName.strCategory }
          </button>
        ))
      )}
      {!data ? <p>loading</p> : (
        data.map((recipe, index) => (
          <Link
            to={ `foods/${data[index].idMeal}` }
            key={ index }
          >
            <Card
              index={ index }
              infoRecipe={ recipe }

            />
          </Link>
        ))
      )}

    </div>
  );
}

export default Food;

import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';

function Food() {
  const food = 'Foods';
  const { data } = useContext(RecipesContext);
  const history = useHistory();
  console.log(data);
  if (data.length === 1) {
    history.push(`/foods/${data[0].idMeal}`);
  }

  return (
    <div>
      <Header pageTitle={ food } btnSearch />
      {!data ? <p>loading</p> : (
        data.map((recipe, index) => (
          <Link
            to={ `foods/${data.idMeal}` }
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

import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';

function Food() {
  const pageTitle = 'Foods';
  const { data, setApiFilter, category } = useContext(RecipesContext);
  const history = useHistory();

  useEffect(() => {
    if (data.length === 1 && data[0].idMeal !== '52968') {
      console.log(data[0]);
      return history.push(`/foods/${data[0].idMeal}`);
    }
  }, [data, history]);

  useEffect(() => {
    if (!data) {
      setApiFilter(pageTitle);
    } else {
      setApiFilter(pageTitle);
    }
  }, [data, setApiFilter]);

  return (
    <div>
      <Header pageTitle={ pageTitle } btnSearch />
      {!category ? undefined : (
        category.map((categoryName, index) => (
          <button
            value={ categoryName.strCategory }
            key={ index }
            type="button"
            data-testid={ `${categoryName.strCategory}-category-filter` }
            onClick={ (e) => console.log(e.target.value) }
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

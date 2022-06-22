import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';

function Food() {
  const food = 'Foods';
  const { data, setApiFilter, category } = useContext(RecipesContext);

  const verifyRedirect = () => {
    if (!data) {
      setApiFilter(food);
    } else if (data.length === 1 && data[0].idMeal !== '52968') {
      console.log('agora sim');
      return <Redirect to={ `/foods/${data[0].idMeal}` } />;
    }
  };

  return (
    <div>
      {verifyRedirect()}
      <Header pageTitle={ food } btnSearch />
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

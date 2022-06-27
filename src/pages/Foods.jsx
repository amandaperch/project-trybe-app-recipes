import React, { useContext, useEffect, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';
import Footer from '../components/Footer';

const maxRecipes = 12;
function Food() {
  const pageTitle = 'Foods';
  const history = useHistory();
  const { data, setApiFilter, category, setData } = useContext(RecipesContext);
  const [localData, setLocalData] = useState();
  useEffect(() => {
    if (data.length === 1 && data[0].idMeal !== '52968') {
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

  const filterCategory = useCallback(async (categoryName) => {
    setLocalData(data);
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
    const { meals } = await fetch(`${url}${categoryName}`)
      .then((response) => response.json());
    setData(meals.slice(0, maxRecipes));
  }, [data, setData, setLocalData]);

  const removeFilter = () => {
    setData(localData);
  };

  return (
    <div>
      <Header pageTitle={ pageTitle } btnSearch />
      {!category ? undefined
        : (
          category.map((categoryName, index) => (
            <button
              value={ categoryName.strCategory }
              key={ index }
              type="button"
              data-testid={ `${categoryName.strCategory}-category-filter` }
              onClick={ async (event) => filterCategory(event.target.value) }
            >
              { categoryName.strCategory }
            </button>
          ))
        )}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => removeFilter() }
      >
        all
      </button>
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
      <Footer />
    </div>
  );
}

export default Food;

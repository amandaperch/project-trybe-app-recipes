import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Drinks() {
  const pageTitle = 'Drinks';
  const { data, setApiFilter } = useContext(RecipesContext);
  const history = useHistory();

  useEffect(() => {
    if (data.length === 1) {
      console.log(data[0]);
      return history.push(`/drinks/${data[0].idDrink}`);
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
      {!data ? <p>loading</p> : (
        data.map((recipe, index) => (
          <Link
            to={ `drinks/${data[index].idDrink}` }
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

export default Drinks;

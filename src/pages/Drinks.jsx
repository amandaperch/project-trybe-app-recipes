import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';
import Footer from '../components/Footer';

function Drinks() {
  const { data } = useContext(RecipesContext);
  const history = useHistory();

  if (data.length === 1) {
    history.push(`/drinks/${data[0].idDrink}`);
  }

  return (
    <div>
      <Header pageTitle="Drinks" btnSearch />
      {!data ? <p>loading</p> : (
        data.map((recipe, index) => (
          <Link
            to={ `drinks/${data.idDrink}` }
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

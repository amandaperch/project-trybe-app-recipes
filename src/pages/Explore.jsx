import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <>
      <div>
        <Header pageTitle="Explore" />
      </div>
      <div>
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </button>
      </div>
      <footer>
        <Footer />
      </footer>

    </>

  );
}

export default Explore;

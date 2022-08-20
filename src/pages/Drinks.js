import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function Drinks() {
  const { setheaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Drinks', search: true });
  }, [setheaderTitle]);

  return (
    <>
      <Header />
      <main>drinks</main>
    </>
  );
}

export default Drinks;

import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function Foods() {
  const { setheaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Foods', search: true });
  }, [setheaderTitle]);
  return (
    <>
      <Header />
      <main>Foods</main>
    </>
  );
}

export default Foods;

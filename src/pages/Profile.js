import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function Profile() {
  const { setheaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Profile' });
  }, [setheaderTitle]);

  return (
    <>
      <Header />
      <main>Profile</main>
    </>
  );
}

export default Profile;

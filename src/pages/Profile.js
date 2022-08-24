import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function Profile() {
  const { setheaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setheaderTitle({ title: 'Profile', search: false });
  }, [setheaderTitle]);

  const getEmail = () => {
    const email = JSON.parse(localStorage.getItem('user'));
    return email.email;
  };

  return (
    <>
      <Header />
      <main>
        <p data-testid="profile-email">{ getEmail() }</p>
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </main>
    </>
  );
}

export default Profile;

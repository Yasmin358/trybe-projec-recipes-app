import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header className="header">
      <h1 data-testid="page-title">{ headerTitle }</h1>
      <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
      <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
    </header>
  );
}

export default Header;

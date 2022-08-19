import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const handleSearch = () => {
    // função para esconder e mostrar o componente de busca
  };

  return (
    <header className="header">
      <h1 data-testid="page-title">{ headerTitle }</h1>
      <Link to="/profile">
        <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
      </Link>
      <button type="button" onClick={ handleSearch }>
        <img
          src={ searchIcon }
          alt="searchIcon"
          data-testid="search-top-btn"
        />
      </button>
      <SearchBar />
    </header>
  );
}

export default Header;

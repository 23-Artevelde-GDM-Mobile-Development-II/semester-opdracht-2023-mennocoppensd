import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Container>
      <Link to="/" className="logo">KeyHunt</Link>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/search">Search Properties</Link>
            </li>
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

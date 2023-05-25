import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
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
              <Link to="/search">
                
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
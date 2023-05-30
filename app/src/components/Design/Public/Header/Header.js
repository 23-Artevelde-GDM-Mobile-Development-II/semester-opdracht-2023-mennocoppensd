import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Container from '../../Container/Container';
import './Header.css';
import { useAuthContext } from '../../../App/Auth/AuthContainer';

const Header = () => {
  const { user, logout } = useAuthContext();
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
            {
                user 
                ? <a href="/" onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} /> Log out</a> 
                : <Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /></Link>
              }
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
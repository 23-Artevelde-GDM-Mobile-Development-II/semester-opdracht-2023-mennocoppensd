import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faSignOutAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import Container from '../../Container/Container';
import './Header.css';
import { useAuthContext } from '../../../App/Auth/AuthContainer';

const Header = () => {
  const { user, logout } = useAuthContext();
  const isAdmin = user?.role === "ADMIN";
  const isEstateOffice = user?.role === "ESTATE OFFICE";
  return (
    <header className="header">
      <Container>
        <Link to="/" className="logo">KeyHunt</Link>
        {isEstateOffice && isAdmin && (
                  <nav className="nav-menu">
                  <ul>
                    
       
                  </ul>
                </nav>
        )}
        {!isEstateOffice && !isAdmin && (
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/search">   
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/favorites">
                  <FontAwesomeIcon icon={faHeart} />
                </Link>
              </li>
            )}
      
          </ul>
        </nav>
        )}
           <li>
              {user 
                ? <a href="/" onClick={logout}><FontAwesomeIcon icon={faSignOutAlt} /> Log out</a> 
                : <Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /></Link>
              }
            </li>
      </Container>
    </header>
  );
}

export default Header;
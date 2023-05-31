import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ title, img, onClick, href, children, favorited, handleFavoriteClick, isProperty }) => {
  
  if (href) {
    return (
      <div className="list-item">
        <Link to={href}>
          <img className="list-item__image" src={img} alt={title} />
          <h3 className="list-item__title">{title}</h3>
        </Link>
        {isProperty && (
          <FontAwesomeIcon 
            icon={faHeart} 
            className={favorited ? "favorited" : ""} 
            onClick={handleFavoriteClick} 
          />
        )}
        {children}
      </div>
    );
  }

  return (
    <li className="list-item" onClick={onClick}>
      <img className="list-item__image" src={img} alt={title} />
      <h3 className="list-item__title">{title}</h3>
      {isProperty && (
        <FontAwesomeIcon 
          icon={faHeart} 
          className={favorited ? "favorited" : ""} 
          onClick={handleFavoriteClick} 
        />
      )}
      {children}
    </li>
  );
};

export default ListItem;
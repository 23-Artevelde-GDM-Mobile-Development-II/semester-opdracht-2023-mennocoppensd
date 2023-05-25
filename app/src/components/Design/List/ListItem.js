import { Link } from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ title, img, onClick, href, children }) => {
  
  if (href) {
    return (
      <div className="list-item">
        <Link to={href}>
          <img className="list-item__image" src={img} alt={title} />
          <h3 className="list-item__title">{title}</h3>
        </Link>
        {children}
      </div>
    );
  }

  return (
    <li className="list-item" onClick={onClick}>
      <img className="list-item__image" src={img} alt={title} />
      <h3 className="list-item__title">{title}</h3>
      {children}
    </li>
  );
};

export default ListItem;

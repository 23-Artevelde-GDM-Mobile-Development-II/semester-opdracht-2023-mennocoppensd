import { Link } from "react-router-dom";
import Title from "../../../Design/Title/Title";

const PublicProperty = ({ property }) => {
  return (
    <>
      <Link to="/">&lt; Back</Link>
      <Title>{property.title}</Title>
      <p>{property.description}</p>
      <p>{property.price}</p>
      <p>{property.location}</p>
      <p>{property.bedrooms}</p>
      <p>{property.amountBathrooms}</p>
      <p>{property.area}</p>
      <p>{property.type}</p>
      <p>{property.status}</p>
      <img src={property.image} alt={property.title} />
    </>
  );
};

export default PublicProperty;
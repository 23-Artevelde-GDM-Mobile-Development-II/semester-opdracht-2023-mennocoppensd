import { useNavigate } from "react-router-dom";
import Title from "../../../Design/Title/Title";
import Button from "../../../Design/Button/Button";

const PublicProperty = ({ property }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };
  return (
    <>
      <Button onClick={handleBackClick}>&lt; Back</Button>
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

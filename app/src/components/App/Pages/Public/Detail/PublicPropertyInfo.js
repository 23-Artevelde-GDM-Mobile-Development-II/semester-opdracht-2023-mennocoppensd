import { Link, useNavigate } from "react-router-dom";
import { formatName } from "../../../../../core/modules/properties/utils";
import styles from "./PublicPropertyInfo.module.css";
import Button from "../../../../Design/Button/Button";

const PublicPropertyInfo = ({ property }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };
  return (
    <div className={styles.publicPropertyInfo}>
      <Button onClick={handleBackClick} className={styles.linkBack}>
        &lt; Back
      </Button>
      <div className={styles.flexEnd}></div>
      <div>
        <img src={property.image} alt={property.title} />
        <h1>{formatName(property)}</h1>
        <p>{property.title}</p>
        <p>Square Meters: {property.squareMeters}</p>
        <p>Type: {property.type}</p>
        <p>For Sale: {property.forSale ? "Yes" : "No"}</p>
        <p>For Rent: {property.forRent ? "Yes" : "No"}</p>
        <p>Estate Office: {property.estateOffice}</p>
        <p>Year Built: {property.yearBuilt}</p>
        <p>Street: {property.street}</p>
        <p>Number: {property.number}</p>
        <p>Municipality: {property.municipality}</p>
        <p>Amount Bathrooms: {property.amountBathrooms}</p>
        <p>Amount Bedrooms: {property.amountBedrooms}</p>
        <p>Price: {property.price}</p>
        {property.photos &&
          property.photos.map((photo, index) => (
            <img
              key={index}
              src={URL.createObjectURL(photo)}
              alt={`property ${index}`}
            />
          ))}
        <p>Is Sold or Rented: {property.isSoldOrRented ? "Yes" : "No"}</p>
      </div>
      <Link
        to={`/chat/${property.estateOffice}/${property._id}`}
        className={styles.contactButton}
      >
        Contact Estate Office
      </Link>
    </div>
  );
};

export default PublicPropertyInfo;

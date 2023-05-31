import { Link } from "react-router-dom";
import Button from "../../../../../Design/Button/Button";
import { formatName } from "../../../../../../core/modules/properties/utils";



const PropertyInfo = ({ property }) => {
  return (
    <div>
      <Link to="/admin">&lt; Back</Link>
      <div className="flex flex-end">
        <Button color="primary" href="edit">
          Edit
        </Button>
      </div>
      <div>
        <img src={property.image} alt={property.title} />
        <h1>{formatName(property)}</h1>
        <p>{property.title}</p>
        <p>{property.squareMeters}</p>
        <p>{property.estateOffice}</p>
      </div>
    </div>
  );
};

export default PropertyInfo;
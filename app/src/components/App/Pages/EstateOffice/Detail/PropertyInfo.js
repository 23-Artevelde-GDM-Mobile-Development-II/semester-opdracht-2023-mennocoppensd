import { Link } from "react-router-dom";
import { formatName } from "../../../../../core/modules/properties/utils";
import Button from "../../../../Design/Button/Button";

const PropertyInfo = ({ property }) => {
  return (
    <div>
      <Link to="/">&lt; Back</Link>
      <div className="flex flex-end">
        <Button color="primary" href="edit">
          Edit
        </Button>
      </div>
      <div>
        <img src={property.image} alt={property.title} />
        <h1>{formatName(property)}</h1>
        <p>{property.title}</p>
        <p>{property.username}</p>
      </div>
    </div>
  );
};

export default PropertyInfo;
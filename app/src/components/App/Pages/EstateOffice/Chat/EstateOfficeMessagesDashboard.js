import { useParams, Link } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";

const EstateOfficeMessagesDashboard = () => {
  const { officeId } = useParams();
  const { data: properties } = useFetch(`/properties/office/${officeId}`);

  return (
    <div>
      <h1>Messages Dashboard</h1>
      {properties.map((property) => (
        <Link
          key={property._id}
          to={`/office/${officeId}/property/${property._id}/chats`}
        >
          <div>
            <h2>{property.title}</h2>
            {/* Render other property details here */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EstateOfficeMessagesDashboard;

import DeletePropertyButton from "./Delete/DeletePropertyButton";

import { useNavigate } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";
import Header from "../../../../Design/Public/Header/Header";
import Loading from "../../../../Design/Loading/Loading";
import Button from "../../../../Design/Button/Button";
import List from "../../../../Design/List/List";
import ListItem from "../../../../Design/List/ListItem";
import { formatName } from "../../../../../core/modules/properties/utils";

const PropertiesOverview = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    invalidate,
    data: properties,
  } = useFetch("/properties");

  const handleBackClick = () => {
    navigate(-1); // navigate to the previous page in the browser history
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const handleDeleteSuccess = () => {
    invalidate();
  };

  return (
    <>
      <Header />
      <Button onClick={handleBackClick}>&lt; Back</Button>
      <h1>Properties</h1>
      <div className="flex flex-end">
        <Button color="primary" onClick={() => navigate("add")}>
          Add
        </Button>
      </div>
      <List>
        {properties.map((property) => (
          <ListItem
            href={`/properties/${property._id}`}
            key={property._id}
            img={property.image}
            title={formatName(property)}
          >
            <p>Type: {property.type}</p>
            <p>Price: {property.price}</p>
            <p>Municipality: {property.municipality}</p>
            <DeletePropertyButton
              id={property._id}
              onSuccess={handleDeleteSuccess}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PropertiesOverview;

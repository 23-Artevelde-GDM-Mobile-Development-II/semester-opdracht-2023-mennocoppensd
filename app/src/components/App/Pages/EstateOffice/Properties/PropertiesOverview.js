

import DeletePropertyButton from "./Delete/DeletePropertyButton";

import { Link, useNavigate, useLocation } from "react-router-dom";
import useFetch from "../../../../../core/hooks/useFetch";
import Header from "../../../../Design/Public/Header/Header";
import Loading from "../../../../Design/Loading/Loading";
import Button from "../../../../Design/Button/Button";
import List from "../../../../Design/List/List";
import ListItem from "../../../../Design/List/ListItem";
import { formatName } from "../../../../../core/modules/properties/utils";

const PropertiesOverview = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {
    isLoading,
    error,
    invalidate,
    data: properties,
  } = useFetch("/properties");

  const handleBackClick = () => {
    console.log('Current location state:', location.state); // This should log { from: '/admin' } or { from: '/office' }
    if (location.state?.from) {
      console.log('Navigating to:', location.state.from); // Check the path you're navigating to
      navigate(location.state.from); // navigate to the previous page in the app, not in the browser history
    } else {
      console.log('Default navigation to: /admin');
      navigate("/admin"); // default back path
    }
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

  console.log(properties);
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

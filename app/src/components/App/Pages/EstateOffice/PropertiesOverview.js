import Loading from "../../../Design/Loading/Loading";
import List from "../../../Design/List/List";
import ListItem from "../../../Design/List/ListItem"
import Button from "../../../Design/Button/Button";
import { formatName } from "../../../../core/modules/properties/utils";
import DeletePropertyButton from "./Delete/DeletePropertyButton";
import useFetch from "../../../../core/hooks/useFetch";

const PropertiesOverview = () => {
  const {
    isLoading,
    error,
    invalidate,
    data: properties,
  } = useFetch("/properties");
 
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
      <div className="flex flex-end">
        <Button color="primary" href="add">
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

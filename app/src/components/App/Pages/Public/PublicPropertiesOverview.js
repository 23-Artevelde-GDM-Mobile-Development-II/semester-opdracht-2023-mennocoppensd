import Loading from "../../../Design/Loading/Loading";
import List from "../../../Design/List/List";
import ListItem from "../../../Design/List/ListItem"
import { formatName } from "../../../../core/modules/properties/utils";
import useFetch from "../../../../core/hooks/useFetch";

const PublicPropertiesOverview = () => {
  const {
    isLoading,
    error,
    data: properties,
  } = useFetch("/properties");
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }


  console.log(properties);
  return (
    <>
      <div className="flex flex-end">
      </div>
      <List>
        {properties.map((property) => (
          <ListItem
            href={`/public/${property._id}`}
            key={property._id}
            img={property.image}
            title={formatName(property)}

          >
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PublicPropertiesOverview;

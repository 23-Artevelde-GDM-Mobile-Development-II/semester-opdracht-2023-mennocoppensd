import useFetch from "../../../../../core/hooks/useFetch";
import { formatName } from "../../../../../core/modules/categories/utils";
import List from "../../../../Design/List/List";
import ListItem from "../../../../Design/List/ListItem";
import Loading from "../../../../Design/Loading/Loading";


const FavoritesPage = () => {
  const { isLoading, error, data: properties } = useFetch("/properties");

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  const favoriteProperties = properties.filter(property => property.favorited);

  return (
    <div>
      <h1>Favorites</h1>
      <List>
        {favoriteProperties.map((property) => (
          <ListItem
            href={`/public/${property._id}`}
            key={property._id}
            img={property.image}
            title={formatName(property)}
          />
        ))}
      </List>
    </div>
  );
};

export default FavoritesPage;
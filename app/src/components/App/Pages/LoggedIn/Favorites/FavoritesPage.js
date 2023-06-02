import useFetch from "../../../../../core/hooks/useFetch";
import { formatName } from "../../../../../core/modules/categories/utils";
import List from "../../../../Design/List/List";
import ListItem from "../../../../Design/List/ListItem";
import Loading from "../../../../Design/Loading/Loading";
import { useAuthContext } from "../../../Auth/AuthContainer";

const FavoritesPage = () => {
  const { user } = useAuthContext() || { user: null };
  const userId = user._id;
  const { isLoading, error, data: favoriteIds } = useFetch(`/favorites/${userId}`);

  // This hook will fetch all the properties, which we'll then filter based on the favorites
  const { data: properties } = useFetch("/properties");
  
  console.log('userId:', userId);
  console.log('favoriteIds:', favoriteIds);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading || !properties) {
    return <Loading />;
  }

  const favoriteProperties = properties.filter(property =>
    favoriteIds.some(favorite => favorite.propertyId === property._id)
  );



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

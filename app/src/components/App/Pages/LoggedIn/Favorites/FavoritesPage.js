import useFetch from "../../../../../core/hooks/useFetch";
import useMutation from "../../../../../core/hooks/useMutation";
import { formatName } from "../../../../../core/modules/properties/utils";
import List from "../../../../Design/List/List";
import ListItem from "../../../../Design/List/ListItem";
import Loading from "../../../../Design/Loading/Loading";
import { useAuthContext } from "../../../Auth/AuthContainer";

import "./FavoritesPage.css";
import Header from "../../../../Design/Public/Header/Header";

const FavoritesPage = () => {
  const { user } = useAuthContext() || { user: null };
  const userId = user._id;
  const {
    isLoading,
    error,
    data: favoriteIds,
  } = useFetch(`/favorites/${userId}`);
  const { data: properties } = useFetch("/properties");
  const { mutate } = useMutation();

  const handleFavoriteClick = (propertyId) => {
    const propertyIndex = favoriteProperties.findIndex(
      (property) => property._id === propertyId
    );
    const newProperties = [...favoriteProperties];
    newProperties[propertyIndex].favorited =
      !newProperties[propertyIndex].favorited;

    mutate(
      `${process.env.REACT_APP_API_URL}/favorites/${propertyId}`,
      {
        method: newProperties[propertyIndex].favorited ? "POST" : "DELETE",
      },
      {
        onSuccess: () => {},
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading || !properties) {
    return <Loading />;
  }

  const favoriteProperties = properties.filter((property) =>
    favoriteIds.some((favorite) => favorite.propertyId === property._id)
  );

  return (
    <div>
      <Header />
      <h1>Favorites</h1>
      <List>
        {favoriteProperties.map((property) => (
          <ListItem
            href={`/public/${property._id}`}
            key={property._id}
            img={property.image}
            title={formatName(property)}
            favorited={property.favorited}
            handleFavoriteClick={() => handleFavoriteClick(property._id)}
            isProperty={true} // set isProperty to true for each property
          />
        ))}
      </List>
    </div>
  );
};

export default FavoritesPage;

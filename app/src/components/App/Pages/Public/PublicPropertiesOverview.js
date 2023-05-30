import React, { useEffect, useState } from 'react';
import Loading from "../../../Design/Loading/Loading";
import List from "../../../Design/List/List";
import ListItem from "../../../Design/List/ListItem"
import { formatName } from "../../../../core/modules/properties/utils";
import useFetch from "../../../../core/hooks/useFetch";
import useMutation from "../../../../core/hooks/useMutation";

import './PublicPropertiesOverview.css';

const PublicPropertiesOverview = ({ userId, favorites }) => {
  const {
    isLoading,
    error,
    data: properties,
  } = useFetch("/properties");


  const [propertiesState, setPropertiesState] = useState([]);

  useEffect(() => {
    setPropertiesState(properties || []);
  }, [properties]);
  const { mutate } = useMutation();
  
  const [data, setData] = useState({
    userId: "",
    propertyId: "",
  });
  const handleFavoriteClick = (userId, propertyId) => {
    // Find the property in the properties array
    const propertyIndex = properties.findIndex(property => property._id === propertyId);

    // If the property is already favorited, unfavorite it. Otherwise, favorite it.
    const newProperties = [...propertiesState];
    newProperties[propertyIndex].favorited = !newProperties[propertyIndex].favorited;
  
    // Update state
    setPropertiesState(newProperties);

  
    // Call the mutation function to persist this change
    mutate(
      `/favorites/${userId}/${propertyId}`,
      {
        method: newProperties[propertyIndex].favorited ? 'POST' : 'DELETE',
        data,
      },
      {
        onSuccess: () => {}, // Placeholder if no specific action
        onError: (error) => { console.error(error); }, // Logs the error to console
      }
    );
    
  };
 
  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  console.log(propertiesState);
  return (
    <>
      <div className="flex flex-end">
      </div>
      <List>
        {propertiesState.map((property) => (
          <ListItem
            href={`/public/${property._id}`}
            key={property._id}
            img={property.image}
            title={formatName(property)}
            favorited={property.favorited}
            handleFavoriteClick={() => handleFavoriteClick(userId, property._id)}
          >
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PublicPropertiesOverview;

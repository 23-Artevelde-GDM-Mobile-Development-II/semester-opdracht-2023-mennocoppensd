import React, { useEffect, useState } from "react";
import Loading from "../../../Design/Loading/Loading";
import List from "../../../Design/List/List";
import ListItem from "../../../Design/List/ListItem";
import { formatName } from "../../../../core/modules/properties/utils";
import useFetch from "../../../../core/hooks/useFetch";
import useMutation from "../../../../core/hooks/useMutation";

import "./PublicPropertiesOverview.css";

const PublicPropertiesOverview = ({ userId, searchTerm, order, saleType }) => {
  const [selectedProperties, setSelectedProperties] = useState([]);

  const {
    data: properties,
    error,
    isLoading,
    refetch,
  } = useFetch("/properties");

  useEffect(() => {
    let filteredProperties = properties || [];

    if (saleType !== "all") {
      filteredProperties = filteredProperties.filter(
        (property) => property.saleRent === saleType
      );
    }

    switch (order) {
      case "year-asc":
        filteredProperties.sort((a, b) => a.yearBuilt - b.yearBuilt);
        break;
      case "year-desc":
        filteredProperties.sort((a, b) => b.yearBuilt - a.yearBuilt);
        break;
      case "price-asc":
        filteredProperties.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProperties.sort((a, b) => b.price - a.price);
        break;
      case "date-asc":
        filteredProperties.sort(
          (a, b) =>
            parseInt(a._id.substring(0, 8), 16) -
            parseInt(b._id.substring(0, 8), 16)
        );
        break;
      case "date-desc":
        filteredProperties.sort(
          (a, b) =>
            parseInt(b._id.substring(0, 8), 16) -
            parseInt(a._id.substring(0, 8), 16)
        );
        break;
      default:
        break;
    }

    setSelectedProperties(filteredProperties);
  }, [properties, saleType, order]);

  const { mutate } = useMutation();

  const handleFavoriteClick = (propertyId) => {
    const propertyIndex = selectedProperties.findIndex(
      (property) => property._id === propertyId
    );
    const newProperties = [...selectedProperties];
    newProperties[propertyIndex].favorited =
      !newProperties[propertyIndex].favorited;

    setSelectedProperties(newProperties);

    mutate(
      `${process.env.REACT_APP_API_URL}/favorites/${propertyId}`,
      {
        method: newProperties[propertyIndex].favorited ? "POST" : "DELETE",
      },
      {
        onSuccess: () => {}, // Placeholder if no specific action
        onError: (error) => {
          console.error(error);
        }, // Logs the error to console
      }
    );
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <List>
        {selectedProperties
          .filter((property) => {
            const title = property.street || "";
            const municipality = property.municipality || "";
            const searchTermLower = searchTerm?.toLowerCase() || "";
            return (
              title.toLowerCase().includes(searchTermLower) ||
              municipality.toLowerCase().includes(searchTermLower)
            );
          })
          .map((property) => (
            <ListItem
              href={`/public/${property._id}`}
              key={property._id}
              img={property.image}
              title={formatName(property)}
              favorited={property.favorited}
              handleFavoriteClick={() => handleFavoriteClick(property._id)}
              isProperty={true} // set isProperty to true for each property
            >
              <p>Type: {property.type}</p>
              <p>Price: € {property.price}</p>
              <p>Municipality: {property.municipality}</p>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default PublicPropertiesOverview;

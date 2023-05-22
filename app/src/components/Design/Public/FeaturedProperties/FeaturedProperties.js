// FeaturedProperties.js
import React from 'react';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
  // Sample data for featured properties
  const properties = [
    {
      id: 1,
      image: './apartment_ny.jpg',
      type: 'Apartment',
      price: '$200,000',
      location: 'New York',
    },
    {
      id: 2,
      image: './house_la.jpg',
      type: 'House',
      price: '$500,000',
      location: 'Los Angeles',
    },
    // Add more featured properties as needed
  ];

  return (
    <div className="featured-properties">
      <h2>Featured Properties</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div className={`property-card property-image-${property.id}`} key={property.id}>
            <div className="property-details">
              <h3>{property.type}</h3>
              <p>Price: {property.price}</p>
              <p>Location: {property.location}</p>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../Container/Container';
import './SearchForm.css';

const SearchForm = () => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState('');
  const [region, setRegion] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Construct the search query based on the user's inputs
    const query = `?type=${propertyType}&region=${region}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    // Redirect the user to the search results page with the query parameters
    navigate(`/search${query}`);
  };

  return (
      // <Container>
    <form className="search-form" onSubmit={handleSearch}>
      <label>
        Property Type:
        <input
          className="search-input"
          type="text"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        />
      </label>
      <label>
        Region:
        <input
          className="search-input"
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </label>
      <label>
        Min Price:
        <input
          className="search-input"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label>
        Max Price:
        <input
          className="search-input"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <button className="search-button" type="submit">Search</button>
    </form>
      // </Container>
  );
};

export default SearchForm;

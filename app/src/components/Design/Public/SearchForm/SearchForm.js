import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../Container/Container';
import './SearchForm.css';

const regions = [
  "All",
  "Antwerp",
  "Flemish Brabant",
  "West Flanders",
  "East Flanders",
  "Hainaut",
  "Liège",
  "Limburg",
  "Luxembourg",
  "Namur",
  "Walloon Brabant",
];

const SearchForm = ({ categories }) => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("");
  const [region, setRegion] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  const handleRegionClick = (value) => {
    setRegion(value);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Construct the search query based on the user's inputs
    const query = `?type=${propertyType}&region=${region}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    // Redirect the user to the search results page with the query parameters
    navigate(`/search${query}`);
  };
  
  console.log(categories);
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <label>
        Property Type:
        <select
          className="search-input"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Select a property type</option> {/* Add an empty option */}
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <label>Region:</label>
      <div className="region-tiles">
        {regions.map((value) => (
          <div
            key={value}
            className={`region-tile ${region === value ? "selected" : ""}`}
            onClick={() => handleRegionClick(value)}
          >
            {value}
          </div>
        ))}
      </div>
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
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchForm.css';

const SearchForm = ({ categories, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("");
  const [region, setRegion] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [order, setOrder] = useState("");
  const [saleType, setSaleType] = useState("all");

  const handleSaleTypeChange = (e) => {
    setSaleType(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };
  
  const handleRegionClick = (value) => {
    setRegion(value);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Construct the search query based on the user's inputs
    const query = `?type=${propertyType}&region=${region}&minPrice=${minPrice}&maxPrice=${maxPrice}&order=${order}&saleType=${saleType}`;
    // Redirect the user to the search results page with the query parameters
    navigate(`/search${query}`);
  };
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <label>
        Street name / municipality search filter:
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <div className="saleTypeGroup" onChange={handleSaleTypeChange}>
        All <input type="radio" value="all" name="saleType" defaultChecked /> 
        For Rent <input type="radio" value="forRent" name="saleType" /> 
        For Sale<input type="radio" value="forSale" name="saleType" /> 
      </div>
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
      <label>
        Order By:
        <select
          className="search-input"
          onChange={handleOrderChange}
        >
          <option value="">Select an order</option>
          <option value="year-asc">Year Ascending</option>
          <option value="year-desc">Year Descending</option>
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
          <option value="date-asc">Date Ascending</option>
          <option value="date-desc">Date Descending</option>
        </select>
      </label>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
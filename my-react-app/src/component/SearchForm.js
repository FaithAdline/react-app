import React from "react";
import './App.css';

const SearchForm = () => {
  return (
    <form>
      <input type="text" id="search-input" placeholder="Search for images" />
      <button id="search-button">Search</button>
    </form>
  );
};

export default SearchForm;
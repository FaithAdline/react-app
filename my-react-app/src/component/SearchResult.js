import React from "react";
import './App.css';

const SearchResult = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <div key={index} className="search-result">
          <img src={result.src} alt={result.alt} width="50%" height="50%" />
          <a href={result.link} target="_blank" rel="noopener noreferrer">
            {result.alt}
          </a>
        </div>
      ))}
      <button id="show-more-button">Show More</button>
    </div>
  );
};

export default SearchResult;
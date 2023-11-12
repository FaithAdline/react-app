import React, { useState } from "react";
import './App.css';

const accesskey = "MKhtd0o7oyR0Ey_u5QXq-gBSfT0-33aYpnZI4vV8PuI";

function App() {
  const [inputData, setInputData] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  
  const handleSearch = async () => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    const newResults = data.results;

    if (page === 1) {
      setResults(newResults);
    } else {
      setResults([...results, ...newResults]);
    }

    setPage(page + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    handleSearch();
  };

  return (
    <div>
      {/* Your added HTML code */}
      <h1>IMAGE SEARCH APP</h1>
      <form action="">
        <input
          type="text"
          id="search-input"
          placeholder="search for images"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button id="search-button" type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
      <button id="show-more-button" onClick={handleSearch}>
        Show More
      </button>

      {/* Your existing JSX code */}
      <div className="search-results">
        {results.map((result, index) => (
          <div key={index} className="search-result">
            <img src={result.urls.small} alt={result.alt_description} />
            <a href={result.links.html} target="_blank" rel="noopener noreferrer">
              {result.alt_description}
            </a>
          </div>
        ))}
      </div>

      {page > 1 && (
        <button onClick={handleSearch}>Load More</button>
      )}
    </div>
  );
}

export default App;



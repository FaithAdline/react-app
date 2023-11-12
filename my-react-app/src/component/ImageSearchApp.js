import React from "react";
import './App.css';

const ImageSearchApp = () => {
  const results = [
    {
      src: "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Desert images",
      link: "https://unsplash.com/photos/ud9NlvvEzUI",
    },
    {
      src: "https://images.unsplash.com/photo-1695462615087-e7f5a7a09fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      alt: "Flamingos",
      link: "https://unsplash.com/photos/a-pink-flamingo-standing-in-front-of-a-bush-xV-DZsRvlkM",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80",
      alt: "Nature",
      link: "https://unsplash.com/photos/J6Fdqeb0Vcs",
    },
    {
      src: "https://media.istockphoto.com/id/1445196807/photo/group-of-cute-pets-on-white-background.jpg?s=612x612&w=0&k=20&c=IozJCO8YpMT3N-cp9UVewHZZfldhNaBbHVr3K826cAo=",
      alt: "Animals",
      link: "https://www.istockphoto.com/photo/group-of-cute-pets-on-white-background-banner-design-gm1445196818-483681301?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fanimal&utm_medium=affiliate&utm_source=unsplash&utm_term=animal%3A%3A%3A",
    },
  ];

  return (
    <div>
      <h1>IMAGE SEARCH APP</h1>
      <form>
        <input type="text" id="search-input" placeholder="search for images" />
        <button id="search-button">Search</button>
      </form>

      <div className="search-results">
        {results.map((result, index) => (
          <div key={index} className="search-result">
            <img src={result.src} alt={result.alt} width="50%" height="50%" />
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              {result.alt}
            </a>
          </div>
        ))}
      </div>

      <button id="show-more-button">Show More</button>
    </div>
  );
};

export default ImageSearchApp;
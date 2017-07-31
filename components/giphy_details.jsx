import React from 'react';

function GiphyDetails({ giphy }) {
  return (
    <div className="giphy-details">
      <img src={giphy.images.fixed_height.url} />
      <h4>URL: <span>{giphy.images.fixed_height.url}</span></h4>
      <h4>Rating: <span>{giphy.rating}</span></h4>
      <h4>Import date: <span>{giphy.import_datetime}</span></h4>
    </div>
  );
}

export default GiphyDetails;

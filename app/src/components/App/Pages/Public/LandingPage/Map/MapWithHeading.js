import React from 'react';
import Map from './Map';  // import the Map component
import './MapWithHeading.css';

function MapWithHeading() {
  return (
    <div className="map">
      <br/>
      <br/>
      <h1>Properties in <span style={{ color: '#7F5AF0' }}>every</span> municipality of Belgium</h1>
      <h2 style={{ color: 'grey', fontStyle: 'italic' }}>Finding a needle in a haystack just got easier!</h2>
      <Map />
    </div>
  );
}

export default MapWithHeading;
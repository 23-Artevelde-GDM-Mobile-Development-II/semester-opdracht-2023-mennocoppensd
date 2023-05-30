import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWVubm9jb3BwZW5zZCIsImEiOiJjbGkzbXp2ZTkwamlmM3Fsc3Iyc3V2c3ppIn0.6apfOUaKWLstVrhl-h0GpQ';

function Map() {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/satellite-streets-v11',
          center: [4.35247, 50.8466],
          zoom: 9
        });
      
        map.on('load', function() {
          // fetch your JSON data
          fetch('https://raw.githubusercontent.com/jief/zipcode-belgium/master/zipcode-belgium.json')
  .then(response => response.json())
  .then(data => {
    // Convert data to GeoJSON
    const geoJson = {
      type: 'FeatureCollection',
      features: data.map(item => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [item.lng, item.lat]  // using lng and lat fields
        },
        properties: {
          name: item.city,
          zip: item.zip
        }
      }))
    };

    // add the GeoJSON data as a new source
    map.addSource('municipalities', {
      type: 'geojson',
      data: geoJson
    });
              // add a new layer with your source
              map.addLayer({
                id: 'municipalities',
                type: 'circle',
                source: 'municipalities',
                paint: {
                  'circle-radius': 5,
                  'circle-color': '#7F5AF0'
                }
              });
              
              // when a click event occurs on a feature in the municipalities layer, open a popup at the
              // location of the feature, with description HTML from its properties.
              map.on('click', 'municipalities', function(e) {
                new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML(e.features[0].properties.name + '<br>' + e.features[0].properties.zip)
                  .addTo(map);
              });
      
              // change the cursor to a pointer when the it enters a feature in the municipalities layer.
              map.on('mouseenter', 'municipalities', function() {
                map.getCanvas().style.cursor = 'pointer';
              });
      
              // change it back to a pointer when it leaves.
              map.on('mouseleave', 'municipalities', function() {
                map.getCanvas().style.cursor = '';
              });
            });
        });

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '600px' }} />;
}

export default Map;

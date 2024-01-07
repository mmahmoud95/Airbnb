import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";

import Map from "react-map-gl";
// const geolib = require("geolib");
import * as geolib from "geolib";

function MapCom({ searchResults }) {
  const cordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = geolib.getCenter(cordinates);
  const viewport = {};

  const [selectedLocation, setSelectedLocation] = useState({});
  console.log(selectedLocation);
  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mmahmoud10/clr2nn455005v01o76z65dz95"
      mapboxAccessToken={process.env.mapBox_key}
    >
      {/* {searchResults.map((result, index) => (
        <div key={index}>
          <Marker longitude={result.long} latitude={result.lat} anchor="bottom">
            <span
              onClick={() => setSelectedLocation(result)}
              className="max-w-[20px] animate-bounce cursor-pointer text-xl"
            >
              📌
            </span>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))} */}
    </Map>
  );
}

export default MapCom;

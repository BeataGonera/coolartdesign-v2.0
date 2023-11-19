"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDuqSNk8p1QVa5X8TLX_HatSnuh8wbo4N8",
  });
  const center = useMemo(() => ({ lat: 51.107883, lng: 17.038538 }), []);

  return (
    <div>
      {!isLoaded && <h1>Loading...</h1>}
      {isLoaded && (
        <GoogleMap
          mapContainerClassName={"map-container"}
          center={center}
          zoom={16}
        >
          <Marker position={{ lat: 51.107883, lng: 17.038538 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;

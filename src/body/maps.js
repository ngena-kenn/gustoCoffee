import React, { Component } from "react";
import { useMemo } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import '../css/page.css';


 function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3Oz-oSw6WfgaBjnHi_pVZknBzA5IsZeU",
  });

  if (!isLoaded) return <div>Patientez...</div>;
  
  return (
    <div>
      <Map />
    </div>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: 48.800217, lng: 2.4182743 }), []);

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

<div>test</div>

export default Home;

import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'; // You can use the npm package 'google-map-react'

const GoogleMapAPIKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
export const MapWrapper: React.FC = () => {


  return (
        <div className="flex-1" style={{ height: '100vh', width: '100vw' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GoogleMapAPIKey }} // Add your Google Maps API key here
            defaultCenter={{ lat: 11.303289, lng: 77.488843 }} // Default location (San Francisco)
            defaultZoom={10}
          />
      </div>
  );
};

export default MapWrapper;

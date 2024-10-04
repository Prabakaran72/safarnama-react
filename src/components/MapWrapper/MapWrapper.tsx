import React, { useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react'; // You can use the npm package 'google-map-react'
import MarkerComp from './MarkerComp';
import { useAuth } from '../Auth/AuthProvider';

const Marker = ({ lat, lng }: { lat: number; lng: number }) => {
  console.log('Marker coordinates:', lat, lng); // Example of usage

  // return (
  //   <div style={{ color: 'red', fontSize: '24px' }}>📍</div>
  // );

  return (
    // <div style={{ position: 'relative', transform: 'translate(-50%, -100%)' }}>
    //   {/* Custom Marker Pin */}
    //   <img
    //     src="https://img.icons8.com/color/48/000000/marker.png" // Replace with your custom marker icon
    //     alt="Map Marker"
    //     style={{ width: '32px', height: '32px', position: 'absolute', zIndex: 10 }} // Marker on top
    //   />
    //   {/* Circle around the marker */}
    //   <div
    //     style={{
    //       width: '100px',
    //       height: '100px',
    //       borderRadius: '50%',
    //       border: '2px solid rgba(0,0,0,0.5)',
    //       position: 'absolute',
    //       top: '50%',
    //       left: '50%',
    //       transform: 'translate(-50%, -50%)',
    //       zIndex: 5,
    //     }}
    //   />
    //   {/* Dots around the circle */}
    //   <div
    //     style={{
    //       width: '10px',
    //       height: '10px',
    //       borderRadius: '50%',
    //       backgroundColor: 'black',
    //       position: 'absolute',
    //       top: '0', // Top dot
    //       left: '50%',
    //       transform: 'translate(-50%, -50%)',
    //     }}
    //   />
    //   <div
    //     style={{
    //       width: '10px',
    //       height: '10px',
    //       borderRadius: '50%',
    //       backgroundColor: 'black',
    //       position: 'absolute',
    //       bottom: '0', // Bottom dot
    //       left: '50%',
    //       transform: 'translate(-50%, 50%)',
    //     }}
    //   />
    //   <div
    //     style={{
    //       width: '10px',
    //       height: '10px',
    //       borderRadius: '50%',
    //       backgroundColor: 'black',
    //       position: 'absolute',
    //       left: '0', // Left dot
    //       top: '50%',
    //       transform: 'translate(-50%, -50%)',
    //     }}
    //   />
    //   <div
    //     style={{
    //       width: '10px',
    //       height: '10px',
    //       borderRadius: '50%',
    //       backgroundColor: 'black',
    //       position: 'absolute',
    //       right: '0', // Right dot
    //       top: '50%',
    //       transform: 'translate(50%, -50%)',
    //     }}
    //   />
    // </div>
    <MarkerComp/>
    
  );
};


const GoogleMapAPIKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
export const MapWrapper: React.FC = () => {
  const {state, dispatch} = useAuth();
  const [selectedPoint, setSelectedPoint] = useState<{ lat: number; lng: number } | null>(null);
  const [radius, setRadius] = useState<number>(1000);
  const mapRef = useRef(null);
console.log("state", state)

  const handleMapClick = (event: { lat: number; lng: number })=>{
    setSelectedPoint({ lat: event.lat, lng: event.lng });
  };
  // const handleApiLoaded = (map: any, maps: any) => {
  //   if (selectedPoint) {
  //     // If a point is selected, create a circle
  //     new maps.Circle({
  //       strokeColor: '#FF0000',
  //       strokeOpacity: 0.8,
  //       strokeWeight: 2,
  //       fillColor: '#FF0000',
  //       fillOpacity: 0.35,
  //       map,
  //       center: selectedPoint,
  //       radius: radius, // radius in meters
  //     });
  //   }
  // };

  return (
    <>
      <div className="flex-1" style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GoogleMapAPIKey }} // Add your Google Maps API key here
          defaultCenter={{ lat: 11.303289, lng: 77.488843 }} // Default location (San Francisco)
          defaultZoom={10}
          onClick={handleMapClick}
          yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)} // Load Google Maps API for the Circle
        >{selectedPoint && state.activeMenu.path==='place/create' && <Marker lat={selectedPoint.lat} lng={selectedPoint.lng} />}</GoogleMapReact>
      </div>

      {/* {selectedPoint && (
        <div style={{ marginTop: '20px' }}>
          <p>
            Selected Point: Latitude {selectedPoint.lat}, Longitude {selectedPoint.lng}
          </p>
          <label>
            Trigger Zone Radius (meters):
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              min="100" // Minimum radius
            />
          </label>
        </div>
      )} */}
    </>
  );
};

export default MapWrapper;

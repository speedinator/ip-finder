import React, { useState } from "react";
import ReactMapGL, { Marker } from 'react-map-gl';
import { RiUserLocationFill } from 'react-icons/ri';


const API_KEY = process.env.REACT_APP_ACCESS_TOKEN;
console.log(API_KEY)
// const API_KEY = 'pk.eyJ1IjoibmFtYXNzZSIsImEiOiJjbGNrZ2x3eHcwa2h4M29xbWZib3F0OXl4In0.fANEPpOQmUHR8WTpemVacg';
 
const Map = ({ lat, lon }) => {
//  console.log(lat)
  // Setting up the initial viewport of the map
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 14,
    bearing: 0,
    pitch: 0,
    width: '100%',
    height: '100%',
    
  });
  console.log(lat)



 
  // Viewport re-renders whenever latitude
  // and longitude changes
//   useEffect(() => {
//     const a = { ...viewport };
//     a.latitude = lat;
//     a.longitude = lon;
//     setViewport(a);
//   }, [lat, lon]);
 
  return (
    <div className="map">
        <ReactMapGL >
            markers here
        </ReactMapGL>

      {/* <ReactMapGL
        mapboxApiAccessToken={"pk.eyJ1IjoibmFtYXNzZSIsImEiOiJjbGNrYmdkN3IwYnIwM3FwZjZ4NDl5NmFoIn0.Y8-WzdJTLJEon4M7oYVT6Q"}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11">
      
        <Marker latitude={lat} longitude={lon}>
          <div className="mark">
            <RiUserLocationFill size="25px" color="blue" />
          </div>
        </Marker>
      
      </ReactMapGL> */}
    </div>
  );
};
 
export default Map;
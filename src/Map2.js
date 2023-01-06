import React, { useRef, useEffect, useState} from "react";
import ReactMapGL from "react";
// eslint import/no-webpack-loader-syntax: off
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibmFtYXNzZSIsImEiOiJjbGNrYmdkN3IwYnIwM3FwZjZ4NDl5NmFoIn0.Y8-WzdJTLJEon4M7oYVT6Q';

function Map2(props) {
    console.log(props.lat)
    // const [viewport, setViewport] = useState({
    //     latitude: 45.2,
    //     longitude: -75,
    //     zoom: 10,
    //     width: "100vw",
    //     height: "100vh"

    // })

    let test = props.lat

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(50);
    const [zoom, setZoom] = useState(9);
    console.log(zoom)

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        });
    });



  return (
    <div>
        <p>Map2</p>
        {/* <ReactMapGL>
           
        </ReactMapGL> */}
        <div ref={mapContainer} className="map-container" />

        <div>
        <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
        </div>
        

    </div>
  )
}

export default Map2
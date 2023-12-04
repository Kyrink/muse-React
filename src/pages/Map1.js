import React, { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import NavBar from "../components/NavBar";

const Map1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const provider = new OpenStreetMapProvider();
  const mapRef = useRef(null); // Ref for the map instance
  const markersRef = useRef([]); // Ref for the markers

  useEffect(() => {
    mapRef.current = L.map('map').setView([43.6591, -70.2568], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);
  }, []);

  const handleSearch = async () => {
    if (searchQuery && mapRef.current) {
      const results = await provider.search({ query: searchQuery });
      if (results && results[0]) {
        const { x, y } = results[0];

        // Clear existing markers
        markersRef.current.forEach(marker => mapRef.current.removeLayer(marker));
        markersRef.current = [];

        // Add new marker and set view
        const newMarker = L.marker([y, x]).addTo(mapRef.current)
          .bindPopup(results[0].label)
          .openPopup();
        markersRef.current.push(newMarker);
        mapRef.current.setView([y, x], 13);
      }
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative bg-whitesmoke-100 w-full h-[860px] overflow-hidden">
      <NavBar />
      <div className="absolute top-[100px] left-[467px] w-[493px] h-[77px] z-10" id='search-bar'>
        <input
          className="font-medium font-helvetica-neue text-base bg-[transparent] absolute w-full top-[0px] right-[0px] left-[0px] rounded-10xs box-border h-14 flex flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="search"
          type="text"
          onKeyPress={event => event.key === 'Enter' && handleSearch()}
        />
      </div>
      <div id="map" className="top-[180px] h-[600px] w-[1000px] mt- mx-auto rounded-3xs overflow-hidden"></div>
    </div>
  );
};

export default Map1;
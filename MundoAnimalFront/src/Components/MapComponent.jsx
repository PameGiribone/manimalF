import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";  // Importar Leaflet

// Establecer el icono del marcador
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",  // URL de CDN para el ícono
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",  // URL de CDN para la sombra
  shadowSize: [41, 41],
});

const MapComponent = ({ ubicacion }) => {
  return (
    <MapContainer
      className="map"
      center={ubicacion}
      zoom={15}
      style={{ height: "50vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      <Marker position={ubicacion} icon={defaultIcon}> {/* Usamos el ícono personalizado aquí */}
        <Popup>Mundo Animal</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

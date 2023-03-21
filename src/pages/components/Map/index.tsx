import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type TProps = {
  latitude: number;
  longitude: number;
};

export default function Maps({ latitude, longitude }: TProps) {
  const REACT_APP_MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoiZGV2Z2FicmllbGxpbWEiLCJhIjoiY2ttbnF4YjVpMDAzYTJycG82OG42ZzcydSJ9.xir-OtLRd835WEZc7w8nxw";
  return (
    <MapContainer
      center={[latitude, longitude]}
      id="map"
      zoom={17}
      zoomControl={false}
      className="map"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        position: "fixed",
        top: 0,
      }}
    >
      <TileLayer
        attribution='Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${REACT_APP_MAPBOX_ACCESS_TOKEN}`}
      />
    </MapContainer>
  );
}

Maps.ssr = false;

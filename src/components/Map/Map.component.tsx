import type { LatLngExpression } from "leaflet";
import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type TProps = {
  latitude: number;
  longitude: number;
  children?: React.ReactNode;
};

export default function Map({ latitude, longitude, children }: TProps) {
  const REACT_APP_MAPBOX_ACCESS_TOKEN =
    "pk.eyJ1IjoiZGV2Z2FicmllbGxpbWEiLCJhIjoiY2ttbnF4YjVpMDAzYTJycG82OG42ZzcydSJ9.xir-OtLRd835WEZc7w8nxw";
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (mapRef.current) {
        mapRef.current.setView([latitude, longitude]);
      }
    }
  }, [latitude, longitude]);

  return (
    <MapContainer
      ref={mapRef}
      center={[latitude, longitude]}
      id="map"
      zoom={17}
      zoomControl={true}
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
      {children ? children : null}
    </MapContainer>
  );
}

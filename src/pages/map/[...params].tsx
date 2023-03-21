import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapCardSearch, MapHeader, MapSearch, MapSideBar } from "./components";

const MapComponent = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Map() {
  const router = useRouter();
  const { params } = router.query;
  const [viewMenu, setViewMenu] = React.useState(false);

  if (!params) {
    return <div>Carregando...</div>;
  }

  const lat = params[0];
  const long = params[1];

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {/* <Maps latitude={-23.108} longitude={-50.3594239} /> */}
      {/* <MapHeader /> */}
      <MapSearch viewMenu={viewMenu} setViewMenu={setViewMenu} />
      <MapSideBar visible={viewMenu} setVisible={setViewMenu} />
      <button
        onClick={() => {
          setViewMenu(!viewMenu);
        }}
      >
        Click
      </button>

      <MapComponent latitude={Number(lat)} longitude={Number(long)} />
    </div>
  );
}

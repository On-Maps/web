"use-client";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { MapHeader, MapSearch, MapSideBar } from "./components";
import { useMapInfo } from "./context/useMapInfo.context";
import "leaflet/dist/leaflet.css";

const MapComponent = dynamic(() => import("../components/Map/Map.component"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

const MarkerComponent = dynamic(
  () => import("../components/Map/Marker.component"),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
);

export default function Map() {
  const router = useRouter();
  const { params } = router.query;
  const { position, setPosition, zoomIcon, anchorIcon, popAnchor } =
    useMapInfo();

  useEffect(() => {
    if (params) {
      const [latitude, longitude] = params as string[];
      setPosition({
        latitude: Number(latitude),
        longitude: Number(longitude),
      });
    }
  }, [params]);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <MapSearch />
      <MapHeader />
      <MapSideBar />
      <MapComponent latitude={position.latitude} longitude={position.longitude}>
        <MarkerComponent
          latitude={position.latitude}
          longitude={position.longitude}
          category="lanchonete"
          zoomIcon={zoomIcon}
          anchorIcon={anchorIcon}
          popAnchor={popAnchor}
          place={{
            id: "123",
            name: "Example Room",
            description: "This is an example room.",
            category: "evento",
            latitude: position.latitude,
            longitude: position.longitude,
            image: [
              {
                url: "https://cdn.discordapp.com/attachments/771470980324524043/1074461555904745524/f53137d8-2472-434b-8ab0-385a611f0c8d.JPG",
                name: "Example Image",
              },
              {
                url: "https://cdn.discordapp.com/attachments/1087523573289189476/1087888499216224397/image.png",
                name: "Example Image",
              },
            ],
            floor: 2,
            building: "Example Building",
            campus: "Example Campus",
            accessibility: true,
            capacity: 30,
            type: "Room",
            equipments: ["Projector", "Whiteboard", "Desks"],
            schedules: [
              {
                day: "Monday",
                start: "09:00",
                end: "17:00",
              },
              {
                day: "Tuesday",
                start: "09:00",
                end: "17:00",
              },
            ],
            responsible: {
              name: "John Doe",
              email: "johndoe@example.com",
              phone: "555-555-5555",
            },
            createdAt: "2022-01-01",
            updatedAt: "2022-01-02",
          }}
        />
      </MapComponent>
    </div>
  );
}

Map.ssr = false;

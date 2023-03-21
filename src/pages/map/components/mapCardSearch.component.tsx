import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

interface RoomProps {
  room: {
    id: number;
    name: string;
    nameShow: string;
    piso: number;
    type: string;
    latitude?: number;
    longitude?: number;
    description: string;
    image: {
      id: number;
      url?: string;
    }[];
    link?: string;
  };
}

export function MapCardSearch({ room, ...rest }: RoomProps) {
  if (!room) {
    return <div></div>;
  }

  return (
    <Link href={`/map/${room.id}`} style={{ textDecoration: "none" }}>
      <div className="containerList2">
        <div className="containerTitle2">
          {room.link ? <img src={room.link} alt={room.name} /> : <div></div>}
        </div>
        <div className="containerDescription2">
          <div className="title2">{room.nameShow}</div>
          <p>
            {room.type} | Piso: {room.piso}
          </p>
        </div>
        <div
          style={{
            height: "100%",
            width: "60px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        ></div>
      </div>
    </Link>
  );
}

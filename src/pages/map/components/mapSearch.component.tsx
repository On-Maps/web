import React, { useState } from "react";
import styles from "../styles/MapSearch.module.css";
import { FaBars } from "react-icons/fa";

type TProps = {
  viewMenu: boolean;
  setViewMenu: (value: boolean) => void;
};

export function MapSearch({ viewMenu, setViewMenu }: TProps) {
  const [search, setSearch] = useState("");

  return (
    <div
      className={viewMenu ? styles["topnav-map"] : styles["topnav-map.active"]}
    >
      <div className={styles.search} id="toggle">
        <FaBars
          color="black"
          onClick={() => {
            setViewMenu(!viewMenu);
          }}
        />
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite o nome da sala"
          id="input-text"
          type="text"
        />
      </div>
      <div id="card">
        {/* {roomss.map((room) => {
          return <CardRoomSearch room={room} key={room.id} />;
        })} */}
      </div>
    </div>
  );
}

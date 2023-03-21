import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/MapSideBar.module.css";
import { FaUser } from "react-icons/fa";

type TProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export function MapSideBar({ visible, setVisible }: TProps) {
  const router = useRouter();
  const [latitudeUser, setLatitudeUser] = useState("");
  const [longitudeUser, setLongitudeUser] = useState("");
  const [config, setConfig] = useState("");
  const [inputCheck, setCheck] = useState(true);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position: any) {
    setLatitudeUser(position.coords.latitude);
    setLongitudeUser(position.coords.longitude);
  }

  function handleMyLocaltion() {
    router.push(`/map/${latitudeUser}/${longitudeUser}`);
  }

  function teste(value: any) {
    console.log(value);
  }

  return (
    <>
      <div
        className={
          visible ? `${styles.sidebar} ${styles.active}` : styles.topnavmap
        }
        id="sidebar"
      >
        <ul>
          <section className={styles.tag} id="campus">
            <h6>Campus</h6>
            <label id="jacarezinho">
              Jacarézinho
              <Link href="/map/-23.1497471/-49.9795701" />
            </label>
            <br />
            <label id="cornelio">
              Cornélio Procópio
              <Link href="/map/-23.1747224/-50.6700414" />
            </label>
            <br />
            <label id="bandeirantes">
              Bandeirantes
              <Link href="/map/-23.108/-50.3594239" />
            </label>
          </section>
          <section className={styles.tag} id="myLocation">
            <ul>
              <div className={styles.radio}>
                <label>
                  <FaUser
                    style={{
                      color: "white",
                      marginRight: "10px",
                      fontSize: "20px",
                      marginBottom: "10px",
                    }}
                  />
                  <input type="button" value="" onClick={handleMyLocaltion} />
                  Sua localização
                </label>
                <br />
              </div>
            </ul>
          </section>
          <section className={styles.tag} id="settings">
            <ul>
              <li>
                <i
                  className="fa fa-cog"
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                ></i>
                <label style={{ fontWeight: "bold" }}>Configurações</label>
              </li>
              <label
                style={{
                  fontSize: "15px",
                  lineHeight: "20px",
                  fontWeight: 100,
                }}
              >
                Tamanho icone:&nbsp;&nbsp;&nbsp;
                <input
                  style={{ cursor: "pointer", width: "110px" }}
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  onChange={(e) => {
                    teste(e.target.value);
                  }}
                />
              </label>
              <br />
              <div className={styles.radio} style={{ lineHeight: "25px" }}>
                <label>
                  <input
                    checked={inputCheck}
                    id="input-checked"
                    type="radio"
                    name="radioConfig"
                    value=""
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(true);
                    }}
                  />{" "}
                  Todas opções
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="evento"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Evento
                </label>
                <br />
                <label>
                  <input
                    id="sala"
                    type="radio"
                    name="radioConfig"
                    value="sala"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Sala
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="laboratório"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Laboratório
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="secretaria"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Secretaria
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="biblioteca"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Biblioteca
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="banheiro"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Banheiro
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="auditorio"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Auditório
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="clínica"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Clinica
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="lanchonete"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Lanchonete
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="lazer"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Lazer
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="radioConfig"
                    value="acessibilidade"
                    onChange={(e) => {
                      setConfig(e.target.value);
                      setCheck(false);
                    }}
                  />{" "}
                  Acessibilidade
                </label>
                <br />
              </div>
            </ul>
          </section>
          <section className={styles.tag} id="infos">
            <ul>
              <li>
                <i
                  className="fa fa-info-circle "
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                ></i>
                <label style={{ fontWeight: "bold" }}>Informações</label>
              </li>
              <li>
                <label>Latitude: {22222213}</label>
              </li>
              <li>
                <label>Longitude: {88888888}</label>
              </li>
            </ul>
          </section>
        </ul>
      </div>
    </>
  );
}

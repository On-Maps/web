import Link from "next/link";
import styles from "../styles/MapHeader.module.css";

export function MapHeader() {
  return (
    <div className={styles.container}>
      <Link href={"/"}>Bandeirantes</Link>
      <Link href={"/"}>Jacarezinho</Link>
      <Link href={"/"}>Cornélio Procópio</Link>
    </div>
  );
}

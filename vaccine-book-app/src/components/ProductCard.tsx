import styles from "./productCard.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image src={"/img/vaccine.jpg"} alt="Pic" fill={true} objectFit="cover" />
      </div>
      <div className={styles.cardtext}>Phizer</div>
    </div>
  );
}

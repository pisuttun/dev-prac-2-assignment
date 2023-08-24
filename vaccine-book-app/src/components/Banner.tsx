import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={"/img/banner.jpg"} alt="banner" fill={true} objectFit="cover" />
      <div className={styles.bannerText}>
        <h1>Time to vaccinate</h1>
        <h3>Book you vaccine here!</h3>
      </div>
    </div>
  );
}

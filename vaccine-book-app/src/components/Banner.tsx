"use client"
import Image from "next/image";
import styles from "./banner.module.css";
import { useState } from "react";

export default function Banner() {
  const bgList = [
    "/img/banner.jpg",
    "/img/banner2.jpg",
    "/img/banner3.jpg",
    "/img/banner4.jpg",
  ]
  const [bgNo, setBgNo] = useState(0)
  return (
    <div className={styles.banner} onClick={()=>setBgNo(bgNo+1)}>
      <Image src={bgList[bgNo%4]} alt="banner" fill={true} objectFit="cover" />
      <div className={styles.bannerText}>
        <h1>Time to vaccinate</h1>
        <h3>Book you vaccine here!</h3>
      </div>
    </div>
  );
}

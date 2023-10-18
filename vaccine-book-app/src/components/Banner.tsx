"use client"
import Image from "next/image";
import styles from "./banner.module.css";
import { useState } from "react";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

export default function Banner() {
  const bgList = [
    "/img/banner.jpg",
    "/img/banner2.jpg",
    "/img/banner3.jpg",
    "/img/banner4.jpg",
  ]
  const [bgNo, setBgNo] = useState(0)
  const router = useRouter()
  const { data:session } = useSession();

  return (
    <div className={styles.banner} onClick={()=>setBgNo(bgNo+1)}>
      <Image src={bgList[bgNo%4]} alt="banner" fill={true} objectFit="cover" />
      <div className={styles.bannerText}>
        <h1>Time to vaccinate</h1>
        <h3>Book your vaccine here!</h3>
      </div>
      {session && (
        <div className={"z-30 absolute top-15 right-10 font-semibold text-cyan-800 text-xl"}>
          Hello {session.user?.name}
        </div>
      )}
      <button
        className="absolute bg-sky-blue text-white font-semibold rounded z-30 hover:bg-cyan-600 bottom-0 right-0 p-2 m-4"
        onClick={(event) => {
          event.stopPropagation();
          router.push("/hospital");
        }}
      >
        BOOK YOUR VACCINE
      </button>
    </div>
  );
}

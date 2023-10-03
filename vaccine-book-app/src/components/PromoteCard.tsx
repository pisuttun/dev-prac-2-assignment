"use client";
import VideoPlayer from "@/components/VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";
import { useState } from "react";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  useWindowListener("contextmenu",(e) => {e.preventDefault()} )

  return (
    <div className={`w-4/5 shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row`}>
      <VideoPlayer vdoSrc="/vid/getvaccine.mp4" isPlaying={isPlaying} />
      <div className={`m-5 w-full flex flex-col font-Montserrat`}>
        Get Your Vaccine Today
        <button
          className="w-fit bg-sky-blue text-white font-semibold py-2 px-2 mt-4 rounded z-30 hover:bg-cyan-600 "
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
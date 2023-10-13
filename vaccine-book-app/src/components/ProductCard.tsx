import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export default function ProductCard(props: { title: string; imgUrl: string, onRating?:Function ,score?:number }) {
  const { title, imgUrl, onRating, score } = props;

  return (
    <InteractiveCard title={title}>
      <div className="w-full h-[60%] relative rounded-t-lg">
        <Image src={imgUrl} alt="Pic" fill={true} objectFit="cover" />
      </div>
      <div className="w-full h-[20%] p-[10px] text-black">{title}</div>
      {onRating &&
        <Rating value={score} onChange={(e,v)=>onRating(title,v)}/>
      }
    </InteractiveCard>
  );
}

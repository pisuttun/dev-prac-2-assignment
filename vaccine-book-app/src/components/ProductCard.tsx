import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function ProductCard(props: { title: string; imgUrl: string }) {

  return (
    <InteractiveCard title={props.title}>
      <div className="w-full h-[60%] relative rounded-t-lg">
        <Image src={props.imgUrl} alt="Pic" fill={true} objectFit="cover" />
      </div>
      <div className="w-full h-[30%] p-[10px] text-black">{props.title}</div>
    </InteractiveCard>
  );
}

import Image from "next/image";

export default function ProductCard(props: { title: string; imgUrl: string }) {
  return (
    <div className="w-1/5 h-[300px] rounded-lg shadow-lg">
      <div className="w-full h-[60%] relative rounded-t-lg">
        <Image src={props.imgUrl} alt="Pic" fill={true} objectFit="cover" />
      </div>
      <div className="w-full h-[30%] p-[10px] text-black">{props.title}</div>
    </div>
  );
}

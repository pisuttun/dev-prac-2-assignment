import Link from "next/link";

export default function TopMenuItem({ title, pageRef }: { title: string; pageRef: string }) {
  return (
    <Link href={pageRef} className="w-32 text-center my-auto text-gray-500 font-sans text-sm">
      {title}
    </Link>
  );
}

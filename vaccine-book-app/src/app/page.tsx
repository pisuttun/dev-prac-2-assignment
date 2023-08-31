import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ margin: "20px", display: "flex", gap: "20px" }}>
        <ProductCard title="Chulalongkorn Hospital" imgUrl="/img/chula.jpg" />
        <ProductCard title="Rajavithi Hospital" imgUrl="/img/rajavithi.jpg" />
        <ProductCard title="Thammasat University Hospital" imgUrl="/img/thammasat.jpg" />
      </div>
    </main>
  );
}

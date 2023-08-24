import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ margin: "20px" }}>
        <ProductCard />
      </div>
    </main>
  );
}

import ProductCard from "../components/ProductCard";
import { useData } from "../context/DataProvider";
import "./main.css";
export default function Main() {
  const { products } = useData();
  return (
    <div className="main">
      {products.map((item) => (
        <ProductCard product={item}></ProductCard>
      ))}
    </div>
  );
}

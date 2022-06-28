import ProductCard from "../components/ProductCard";
import { useData } from "../context/DataProvider";
import "./main.css";
export default function Main() {
  const { products, sortBy, filter, includeOutOfStock } = useData();

  function filterProducts(products) {
    return products
      .filter((product) => {
        if (filter === "") {
          return true;
        }
        if (product.catogories === filter) {
          return true;
        }
      })
      .filter((product) => {
        if (includeOutOfStock === true) {
          return true;
        }
        if (product.inStock === true) {
          return true;
        }
        return false;
      });
  }

  function sortProducts(products) {
    if (sortBy === "HIGH_TO_LOW") {
      return filterProducts(products).sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sortBy === "LOW_TO_HIGH") {
      return filterProducts(products).sort((a, b) => {
        return b.price - a.price;
      });
    }
  }
  console.log(sortProducts(products));

  return (
    <div className="main">
      {sortProducts(products).map((item, id) => (
        <ProductCard product={item}></ProductCard>
      ))}
    </div>
  );
}

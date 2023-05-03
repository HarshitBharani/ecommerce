import "./ProductCard.css";
export default function ProductCard({
  product: { name, id, price, img, description },
}) {
  return (
    <div className="product-container" key={id}>
      <div class="img-container">
        <img src={img} alt="" className="product-img" />
      </div>

      <h3 className="name ">{name}</h3>
      <p className="discription">{description}</p>
      <h4 className="price">{price}</h4>
      <button>Add to Cart</button>
    </div>
  );
}

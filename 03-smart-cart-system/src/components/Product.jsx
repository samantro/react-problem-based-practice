export default function Product({ product, quantity, updateQuantity }) {
  const { id, name, price } = product;

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        backgroundColor: quantity > 0 ? "#080a08" : "white",
      }}
    >
      <h3>{name}</h3>
      <p>Price: ₹ {price}</p>
      <p>Quantity: {quantity}</p>

      <button
        onClick={() => updateQuantity(id, "dec")}
        disabled={quantity === 0}
      >
        -
      </button>

      <button
        onClick={() => updateQuantity(id, "inc")}
        disabled={quantity === 5}
      >
        +
      </button>
    </div>
  );
}

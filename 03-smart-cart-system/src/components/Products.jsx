import Product from "./Product";

export default function Products({ products, cart, updateQuantity }) {
  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          quantity={cart[product.id]}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
}

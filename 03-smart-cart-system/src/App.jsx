import { useState, useMemo } from "react";
import Products from "./components/Products";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  // 🧠 Single source of truth
  const [cart, setCart] = useState({
    1: 0,
    2: 0,
    3: 0,
  });

  // 🧠 Update quantity centrally
  const updateQuantity = (id, type) => {
    setCart((prev) => {
      const currentQty = prev[id];

      if (type === "inc" && currentQty < 5) {
        return { ...prev, [id]: currentQty + 1 };
      }

      if (type === "dec" && currentQty > 0) {
        return { ...prev, [id]: currentQty - 1 };
      }

      return prev;
    });
  };

  // 🧠 Derived values (NOT stored in state)
  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => {
      return total + product.price * cart[product.id];
    }, 0);
  }, [cart, products]);

  const totalItems = useMemo(() => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }, [cart]);

  const discount = totalPrice > 50000 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  const freeDeliveryThreshold = 30000;

  const resetCart = () => {
    setCart({
      1: 0,
      2: 0,
      3: 0,
    });
  };

  return (
    <>
      <h1>Shopping Cart</h1>

      <h2>Total Items: {totalItems}</h2>
      <h2>Total Price: ₹ {totalPrice}</h2>
      <h2>Discount: ₹ {discount}</h2>
      <h2>Final Price: ₹ {finalPrice}</h2>

      {finalPrice > freeDeliveryThreshold ? (
        <p>✅ Free Delivery Applied</p>
      ) : (
        <p>Add ₹ {freeDeliveryThreshold - finalPrice} more for Free Delivery</p>
      )}

      {totalItems === 0 && <h3>🛒 Cart is Empty</h3>}

      <button onClick={resetCart}>Reset Cart</button>

      <Products
        products={products}
        cart={cart}
        updateQuantity={updateQuantity}
      />
    </>
  );
}

export default App;

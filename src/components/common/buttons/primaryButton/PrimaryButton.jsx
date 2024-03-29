/** @format */

import { useCart } from "../../../../context/cartContext/CartContext";

function PrimaryButton({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Product added to cart:", product);
  };

  return (
    <button className="primary" onClick={handleAddToCart}>
      Add to cart
    </button>
  );
}
export default PrimaryButton;

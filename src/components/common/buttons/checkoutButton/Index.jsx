/** @format */

import { useCart } from "../../../../context/cartContext/CartContext";
import { useNavigate } from "react-router-dom";

function CheckoutButton() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return cartItems.length > 0 ? (
    <button onClick={handleCheckout}>Checkout</button>
  ) : null;
}

export default CheckoutButton;

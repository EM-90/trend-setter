/** @format */

import { useCart } from "../../../../context/cartContext/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./checkoutButton.module.css";

function CheckoutButton() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return cartItems.length > 0 ? (
    <div className={styles.checkoutButtonContainer}>
      <button className={styles.checkoutButton} onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  ) : null;
}

export default CheckoutButton;

/** @format */

import styles from "./PrimaryButton.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../../../../context/cartContext/CartContext";

function PrimaryButton({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button className={styles.primaryButton} onClick={handleAddToCart}>
      Add to cart <RiShoppingCartLine size={24} />
    </button>
  );
}
export default PrimaryButton;

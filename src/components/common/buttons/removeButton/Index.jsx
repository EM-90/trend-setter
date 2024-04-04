/** @format */
import { useCart } from "../../../../context/cartContext/CartContext";
import styles from "./removeButton.module.css";
import { RiDeleteBinLine } from "react-icons/ri";

function RemoveButton({ index }) {
  const { removeFromCart } = useCart();

  const handelRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  return (
    <button
      className={styles.removeButton}
      onClick={() => handelRemoveFromCart(index)}
    >
      <RiDeleteBinLine size={16} /> Remove
    </button>
  );
}

export default RemoveButton;

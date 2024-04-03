/** @format */

import { useCart } from "../../../../context/cartContext/CartContext";
import styles from "./qtyDisplay.module.css";

function QtyDisplay({ index, item }) {
  const { decrementQuantity, incrementQuantity } = useCart();

  const handleDecreaseQuantity = (index) => {
    decrementQuantity(index);
  };

  const handleIncreaseQuantity = (index) => {
    incrementQuantity(index);
  };

  return (
    <div className={styles.addProductContainer}>
      <button
        className={styles.minusBtn}
        onClick={() => handleDecreaseQuantity(index)}
      >
        -
      </button>
      <input
        className={styles.qtyField}
        type="number"
        value={item.quantity}
        readOnly
      />
      <button
        className={styles.plusBtn}
        onClick={() => handleIncreaseQuantity(index)}
      >
        +
      </button>
    </div>
  );
}

export default QtyDisplay;

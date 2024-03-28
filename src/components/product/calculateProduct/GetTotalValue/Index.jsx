import styles from "./getTotalValue.module.css";
import { useCart } from '../../../../context/cartContext/CartContext';

export default function GetTotalValue() {
  const { cartItems } = useCart();

  const totalValue = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.discountedPrice * item.quantity;
    });
    return total;
  };

  return (
    <div className={styles.totalContainer}>
      <p className={styles.totalSum}>Total sum: <span className={styles.totalValue}>${totalValue().toFixed(2)}</span></p>
    </div>
  );
}

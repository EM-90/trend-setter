/** @format */
import { Link } from "react-router-dom";
import styles from "./checkoutSuccess.module.css";
import { RiArrowDropLeftLine } from "react-icons/ri";

function CheckoutSuccess() {
  return (
    <main>
      <div className={styles.successMessage}>
        <h2>Thank you for your purchase</h2>
        <h4>You will recive a receipt on e-mail</h4>
      </div>
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/">
          <RiArrowDropLeftLine size={32} />
          Go back to main page
        </Link>
      </div>
    </main>
  );
}

export default CheckoutSuccess;

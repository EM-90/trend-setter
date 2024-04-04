/** @format */

import styles from "./priceRender.module.css";

function PriceRenderer({ discountedPrice, price }) {
  return (
    <>
      {discountedPrice < price ? (
        <div className={styles.priceContainer}>
          <p className={styles.price}>${price}</p>
          <p className={styles.discountPrice}>${discountedPrice}</p>
        </div>
      ) : (
        <p className={styles.discountPrice}>${price}</p>
      )}
    </>
  );
}

export default PriceRenderer;

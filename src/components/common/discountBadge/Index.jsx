/** @format */

import { useState } from "react";
import findPrecentage from "../../product/calculateProduct/FindPrecentage";
import styles from "./discountBadge.module.css";

function DiscountBadge({ product }) {
  const [percentage, setPercentage] = useState(0);

  useState(() => {
    if (product) {
      const percentage = findPrecentage(product.price, product.discountedPrice);
      setPercentage(percentage);
    }
  }, [product]);

  return (
    <div>
      {percentage > 0 && <p className={styles.discountBadge}>-{percentage}%</p>}
    </div>
  );
}

export default DiscountBadge;

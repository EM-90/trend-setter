/** @format */

import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import findPrecentage from "../calculateProduct/FindPrecentage";
import Rating from "../../common/rating/Index";

export default function ProductCard(props) {
  const discountPercentage = findPrecentage(props.price, props.discountedPrice);

  return (
    <Link to={`/product/${props.id}`} className={styles.card}>
      <div className="imageContainer">
        <img src={props.image} alt={props.title} className={styles.cardImage} />
        {discountPercentage > 0 && (
          <p className={styles.discountBadge}>-{discountPercentage}%</p>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <Rating rating={props.rating} />
        <div className={styles.priceSection}>
          {props.discountedPrice < props.price ? (
            <>
              <p className={styles.cardPriceDiscount}>
                ${props.discountedPrice}
              </p>
            </>
          ) : (
            <p className={styles.cardPrice}>${props.price}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

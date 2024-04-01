/** @format */

import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import findPrecentage from "../calculateProduct/FindPrecentage";

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
        <div className={styles.priceSection}>
          {props.discountedPrice < props.price ? (
            <>
              <p className={styles.cardPriceDiscount}>
                Price: ${props.discountedPrice}
              </p>
            </>
          ) : (
            <p className={styles.cardPrice}>Price: ${props.price}</p>
          )}
        </div>
        <p className={styles.cardRating}>Rating: {props.rating}/5</p>
      </div>
    </Link>
  );
}

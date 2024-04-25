/** @format */

import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import DiscountBadge from "../../common/discountBadge/Index";
import Rating from "../../common/rating/Index";
import PriceRenderer from "../../rendering/priceRender/Index";

export default function ProductCard(props) {
  return (
    <Link to={`/product/${props.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={props.image} alt={props.title} className={styles.cardImage} />
        <DiscountBadge product={props} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <Rating rating={props.rating} />
        <div className={styles.priceSection}>
          <PriceRenderer
            discountedPrice={props.discountedPrice}
            price={props.price}
          />
        </div>
      </div>
    </Link>
  );
}

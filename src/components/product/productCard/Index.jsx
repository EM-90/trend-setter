import { Link } from 'react-router-dom';
import styles from './productCard.module.css'
import calculateProduct from '../calculateProduct';

export default function ProductCard(props) {
  const discountPercentage = calculateProduct(props.price, props.discountedPrice);

  return (
    <Link to={`/product/${props.id}`} className={styles.card}>
      <div className='imageContainer'>
        <img src={props.image} alt={props.title} className={styles.cardImage} />
        {discountPercentage > 0 && (
          <p className="dicountBadge">{discountPercentage}% off</p>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{props.title}</h3>
        <div className={styles.priceSection}>
          {props.discountedPrice < props.price ? (
            <>
              <p className={styles.cardPriceDiscount}>New Price: ${props.discountedPrice}</p>
            </>
          ) : (
            <p className={styles.cardPrice}>Price: ${props.price}</p>
          )}
        </div>
        <p className={styles.cardRating}>Rating: {props.rating}</p>
      </div>
    </Link>
  );
}

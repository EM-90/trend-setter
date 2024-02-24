import styles from './productCard.module.css'

export default function ProductCard(props) {
    return (
     <div className={styles.card}>
        <img src={props.image} alt={props.title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{props.title}</h3>
          <div className={styles.priceSection}>
            <p className={styles.cardPrice}>Before: ${props.price}</p>
            <p className={styles.cardPriceDiscount}>New Price: ${props.discountedPrice}</p>
          </div>
          <p className={styles.cardRating}>Rating: {props.rating}</p>
        </div>
     </div>
  );
}
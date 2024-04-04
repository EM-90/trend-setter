/** @format */

import { useCart } from "../../context/cartContext/CartContext";
import styles from "./itemInCart.module.css";
import GetTotalValue from "../../components/product/calculateProduct/GetTotalValue/Index";
import Rating from "../../components/common/rating/Index";
import RemoveButton from "../../components/common/buttons/removeButton/Index";
import QtyDisplay from "../../components/common/input-fields/qty-display/Index";
import DiscountBadge from "../../components/common/discountBadge/Index";
import PriceRenderer from "../../components/rendering/priceRender/Index";

export const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div className={styles.cartProduct} key={index}>
          <div className={styles.imageContainer}>
            <img
              className={styles.productImage}
              src={item.image.url}
              alt={item.title}
            />
            <DiscountBadge product={item} />
          </div>
          <div className={styles.productContent}>
            <h3>{item.title}</h3>
            <Rating rating={item.rating} />
            <PriceRenderer
              discountedPrice={item.discountedPrice}
              price={item.price}
            />
          </div>
          <div className={styles.cartRegulation}>
            <QtyDisplay index={index} item={item} />
            <RemoveButton index={index} />
          </div>
        </div>
      ))}
      <div className={styles.totalContainer}>
        <GetTotalValue />
      </div>
    </div>
  );
};

export default Cart;

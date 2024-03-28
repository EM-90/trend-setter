/** @format */

import { useCart } from "../../context/cartContext/CartContext";
import styles from "./itemInCart.module.css";
import findPrecentage from "../../components/product/calculateProduct/FindPrecentage";
import GetTotalValue from "../../components/product/calculateProduct/GetTotalValue/Index";

export const Cart = () => {
  const { cartItems, decrementQuantity, incrementQuantity, removeFromCart } =
    useCart();

  const handleDecreaseQuantity = (index) => {
    decrementQuantity(index);
  };

  const handleIncreaseQuantity = (index) => {
    incrementQuantity(index);
  };

  const handelRemoveFromCart = (index) => {
    removeFromCart(index);
  };

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
          </div>
          <div className={styles.productContent}>
            <h3>{item.title}</h3>
            <div className="priceSection">
              <p className="price">{item.price}</p>
              <p className="discountedPrice">{item.discountedPrice}</p>
              <p className="productDiscount">
                {findPrecentage(item.price, item.discountedPrice)}% off
              </p>
            </div>
            <span className="rating">Rating {item.rating}/5</span>
            <p className="productDescription">{item.description}</p>
          </div>
          <div className={styles.addProductContainer}>
            <button onClick={() => handleDecreaseQuantity(index)}>-</button>
            <input type="number" value={item.quantity} readOnly />
            <button onClick={() => handleIncreaseQuantity(index)}>+</button>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => handelRemoveFromCart(index)}>
              Remove product
            </button>
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

import { useCart } from "../../context/cartContext/CartContext";
import calculateProduct from "../../components/product/calculateProduct";
export const Cart = () => {

    const { cartItems } = useCart();

    return (
      <div>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.image.url} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="priceSection">
              <p>{item.price}</p>
              <p>{item.discountedPrice}</p>
              <p className="productDiscount">{calculateProduct(item.price, item.discountedPrice)}% off</p>
            </div>
            <span>Rating {item.rating}/5</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    ); 
}



export default Cart;


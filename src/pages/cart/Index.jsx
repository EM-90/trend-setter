import { useCart } from "../../context/cartContext/CartContext";
export const Cart = () => {

    const { cartItems } = useCart();

    return (
      <div>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.image.url} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    ); 
}



export default Cart;


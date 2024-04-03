/** @format */
import { useCart } from "../../../../context/cartContext/CartContext";

function RemoveButton({ index }) {
  const { removeFromCart } = useCart();

  const handelRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  return (
    <button onClick={() => handelRemoveFromCart(index)}>Remove product</button>
  );
}

export default RemoveButton;

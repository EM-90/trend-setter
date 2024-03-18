import { Link } from "react-router-dom"
import styles from './navbar.module.css'
import { RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../../../context/cartContext/CartContext";



export const Navbar = () => {

    const {cartItems} = useCart()
    const cartItemCount = cartItems.length;


    return( <div className={styles.navBar}>
                <div className={styles.navContentContainer}>
                    <div className="Logo">
                            TrendSetter
                        </div>
                    <ul className={styles.links}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart" className="cartIcon"><RiShoppingCartLine size={32}/></Link>
                        {cartItemCount > 0 && (
                            <span className="cartItemCount">{cartItemCount}</span>
                        )}
                        </li>
                    </ul>
                </div>
            </div>
        
    )
}
import { Link } from "react-router-dom"
import styles from './navbar.module.css'
import { RiShoppingCartLine } from "react-icons/ri";


export const Navbar = () => {
    return( <div className={styles.navBar}>
                <div className={styles.navContentContainer}>
                    <div className="Logo">
                            TrendSetter
                        </div>
                    <ul className={styles.links}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart"><RiShoppingCartLine size={32}/></Link></li>
                    </ul>
                </div>
            </div>
        
    )
}
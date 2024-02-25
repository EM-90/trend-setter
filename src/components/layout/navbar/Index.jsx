import { Link } from "react-router-dom"
import styles from './navbar.module.css'

export const Navbar = () => {
    return( <div className={styles.navBar}>
               <div className="Logo">
                        TrendSetter
                    </div>
                <ul className={styles.links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        
    )
}
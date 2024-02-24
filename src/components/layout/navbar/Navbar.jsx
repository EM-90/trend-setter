import { Link } from "react-router-dom"

export const Navbar = () => {
    return( <div>
               <div className="Logo">
                        TrendSetter
                    </div>
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        
    )
}
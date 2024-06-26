/** @format */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../../../context/cartContext/CartContext";
import HamburgerMenu from "../../common/hamburgerMenu/Index";

export const Navbar = () => {
  const { cartItems } = useCart();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const cartItemCount = cartItems.length;

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 450);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <nav className={styles.navBar}>
      <div className={styles.navContentContainer}>
        <Link to ="/" className={styles.logo}>TrendSetter</Link>
        <div className={styles.navItems}>
          {isSmallScreen ? (
            <HamburgerMenu />
          ) : (
            <ul className={styles.links}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
          <div className={styles.cartContainer}>
            <Link to="/cart" className={styles.cartIcon}>
              <RiShoppingCartLine size={32} />
            </Link>
            {cartItemCount > 0 && (
              <span className="cartItemCount">{cartItemCount}</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

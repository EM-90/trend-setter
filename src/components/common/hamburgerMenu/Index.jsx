/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import styles from "./hamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <RiMenuLine size={24} />
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;

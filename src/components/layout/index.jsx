import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Index";
import { Footer } from "./footer/Index";
import styles from './contentContainer.module.css'

export default function Layout() {
    return (
       <div className={styles.layoutContainer}>
        <Navbar/>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
   

}
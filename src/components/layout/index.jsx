import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Index";
import { Footer } from "./footer/Index";
import styles from './contentContainer.module.css'

export default function Layout() {
    return (
       <div className={styles.layoutContainer}>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
   

}
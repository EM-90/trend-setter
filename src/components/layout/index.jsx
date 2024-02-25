import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Index";
import { Footer } from "./footer/Footer";
import styles from './contentContainer.module.css'

export default function Layout() {
    return (
       <div>
        <Navbar/>
        <div className={styles.contentContainer}>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    )
   

}
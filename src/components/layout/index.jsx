import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Index";
import { Footer } from "./footer/Index";
import styles from './contentContainer.module.css'

export default function Layout() {
    return (
       <div>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    )
   

}
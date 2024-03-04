import { RenderProductCard } from "../../components/rendering/RenderProductCard"
import styles from "./home.module.css"

export const Home = () => {  
  const apiUrl = "https://v2.api.noroff.dev/online-shop"

  return (
    <div className={styles.flexContainer}>
      <RenderProductCard/>
    </div>
  )
}



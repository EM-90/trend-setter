import styles from "./home.module.css"
import { RenderProductCard } from "../../components/rendering/RenderProductCard"


export const Home = () => {  

  const apiUrl = "https://v2.api.noroff.dev/online-shop"

  return (
    <div className={styles.flexContainer}>
      <RenderProductCard apiUrl={apiUrl} />
    </div>
  )
}



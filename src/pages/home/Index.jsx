import styles from "./home.module.css"
import { RenderProductCard } from "../../components/rendering/RenderProductCard"


export const Home = () => {  

  return (
    <div className={styles.flexContainer}>
      <RenderProductCard/>
    </div>
  )
}



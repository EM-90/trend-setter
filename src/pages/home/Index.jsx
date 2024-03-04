import Search from "../../components/common/input-fields/search/Index"
import styles from "./home.module.css"


export const Home = () => {  
  const apiUrl = "https://v2.api.noroff.dev/online-shop"

  return (
    <div className={styles.flexContainer}>
      <Search apiUrl={apiUrl}/>
    </div>
  )
}



import Search from "../../components/common/input-fields/search/Index"
import { useState } from "react"
import { RenderProductCard } from "../../components/rendering/RenderProductCard"
import styles from "./home.module.css"


export const Home = () => {  
  const apiUrl = "https://v2.api.noroff.dev/online-shop"
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <div className={styles.container}>
      <Search onSearch={handleSearch} />
      <div className={styles.flexContainer}>
        <RenderProductCard apiUrl={apiUrl} searchTerm={searchTerm} />
      </div>
    </div>
  );
};


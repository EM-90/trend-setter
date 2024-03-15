import Search from "../../components/common/input-fields/search/Index"
import { useState } from "react"
import styles from "./home.module.css"
import { RenderProductCard } from "../../components/rendering/RenderProductCard"


export const Home = () => {  

  const apiUrl = "https://v2.api.noroff.dev/online-shop"
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className={styles.flexContainer}>
        <RenderProductCard apiUrl={apiUrl} searchTerm={searchTerm} />
      </div>
    </div>
  );
};


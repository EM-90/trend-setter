import ProductCard from "../../components/product/productCard/Index";
import fetchData from "../../services/api";
import { useState, useEffect } from "react";
import styles from "./home.module.css"

export const Home = ({apiUrl}) => {

const [productData, setProductData] = useState([]);
  
useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const data = await fetchData(apiUrl);
        if (data) {
          setProductData(data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndSetState();
  }, [apiUrl]);


    return (
        <>
        <h1>TrendSetter</h1>
        <main className={styles.flexContainer}>
        {productData.map((data) => (
            <ProductCard
              key={data.id}
              title={data.title}
              discountedPrice={data.discountedPrice}
              price={data.price}
              rating={data.rating}
              image={data.image.url}
            />
          ))}
        </main>
        </>
    )
   
}
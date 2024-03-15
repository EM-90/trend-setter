import ProductCard from "../../product/productCard/Index";
import fetchData from "../../../services/api";
import { useState, useEffect } from "react";
import styles from './cardContainer.module.css'


export const RenderProductCard = ({apiUrl, searchTerm}) => {

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

      const filteredProducts = productData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    
    
        return (
            <div className={styles.flexContainer}>
                {filteredProducts.map((data) => (
                    <ProductCard
                      key={data.id}
                      title={data.title}
                      discountedPrice={data.discountedPrice}
                      price={data.price}
                      rating={data.rating}
                      image={data.image.url}
                    />
                  ))}
            </div>
                
            
        )
       
    }
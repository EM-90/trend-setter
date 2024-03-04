import ProductCard from "../../product/productCard/Index";
import fetchData from "../../../services/api";
import { useState, useEffect } from "react";


export const RenderProductCard = ({apiUrl}) => {

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
            </>
        )
       
    }
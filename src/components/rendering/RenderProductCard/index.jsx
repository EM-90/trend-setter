import ProductCard from "../../product/productCard/Index";
import styles from './cardContainer.module.css'
import UseFetchData from "../../../services/api/UseFetchData/Index";


export const RenderProductCard = ({apiUrl}) => {

    const {data: productData, loading, error} = UseFetchData(apiUrl);

    if (loading) {
      return(
        <div className="loadingScreen">Loading....</div>
      ) 
    }

    if (error) {
      console.log(productData);
      return(
        <div>Error fetching the requsted data</div>
      ) 
    }

        return (
            <div className={styles.flexContainer}>
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
            </div>
                
            
        )
       
    }
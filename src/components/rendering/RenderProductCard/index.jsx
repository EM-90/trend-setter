import ProductCard from "../../product/productCard/Index";
import styles from './cardContainer.module.css'
import UseFetchData from "../../../services/api/UseFetchData/Index"

export const RenderProductCard = ({apiUrl, searchTerm}) => {
  const { data: productData, loading, error } = UseFetchData(apiUrl);
  
  const filteredProductData = productData.filter((data) =>
    data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.flexContainer}>
      {filteredProductData.map((data) => (
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
  );
};

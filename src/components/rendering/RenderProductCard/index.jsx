import ProductCard from "../../product/productCard/Index";
import styles from './cardContainer.module.css'
import UseFetchData from "../../../services/api/UseFetchData/Index";


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

      const filteredProductData = productData.filter((data) =>
      data.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    
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
                
            
        )
       
    }
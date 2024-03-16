import { useParams } from "react-router-dom";
import UseFetchData from "../../services/api/UseFetchData/Index";
import { useEffect, useState } from "react";

export default function ProductDetails() {
    const { id } = useParams(); 
    const apiUrl = `https://v2.api.noroff.dev/online-shop/${id}`;
    const { data: productData, loading, error } = UseFetchData(apiUrl); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productData) {
            setProduct(productData);
        }
    }, [productData, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {product && (
                <>
                    <h1>Product details</h1>
                    <div>
                        {/* Check if product.image exists before accessing its url property */}
                        {product.image && <img src={product.image.url} alt={product.title} />}
                    </div>
                </>
            )}
        </div>
    );
}



import UseFetchData from "../../services/api/UseFetchData/Index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/cartContext/CartContext";
import findPrecentage from "../../components/product/calculateProduct/FindPrecentage";

export default function ProductDetails() {
    const { id } = useParams(); 
    const apiUrl = `https://v2.api.noroff.dev/online-shop/${id}`;
    const { data: productData, loading, error } = UseFetchData(apiUrl); 
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    const precentage = findPrecentage(product.price, product.discountedPrice);


    useEffect(() => {
        if (productData) {
            setProduct(productData);
        }
    }, [productData, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleAddToCart = () => {
        addToCart(product);
        console.log("Product added to cart:", product);
    };

    return (
        <div>
            {product && (
                <>
                    <h1>Product details</h1>
                    <div className="productDetailsContainer">
                        {product.image && <img src={product.image.url} alt={product.title} />}
                        {precentage > 0 && (
                            <p>{precentage}% off</p>
                        )}
                        <div>
                            <h3>{product.title}</h3>
                            <div className="priceContainer">
                                <p>{product.price}</p>
                                <p>{product.discountedPrice}</p>
                            </div>
                            <p>Rating:{product.rating}/5</p>
                            <div className="descContainer">
                                <h4>Description</h4>
                                <p>{product.description}</p>
                            </div>
                            <div className="buttonContainer">
                                <button className="secondary">Wishlist</button>
                                <button className="primary" onClick={handleAddToCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}


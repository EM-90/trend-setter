/** @format */

import UseFetchData from "../../services/api/UseFetchData/Index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../components/common/buttons/primaryButton/Index";
import styles from "./productDetails.module.css";
import Rating from "../../components/common/rating/Index";
import DiscountBadge from "../../components/common/discountBadge/Index";

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
  console.log(product);
  return (
    <div>
      {product && (
        <>
          <div className={styles.productDetailsContainer}>
            <div className={styles.imageContainer}>
              {product.image && (
                <img
                  className={styles.productImage}
                  src={product.image.url}
                  alt={product.title}
                />
              )}
              {product.discountedPrice && product.price && (
                <DiscountBadge product={product} />
              )}
            </div>
            <div className={styles.productTextContainer}>
              <h3>{product.title}</h3>
              <Rating rating={product.rating} />
              <div className={styles.priceContainer}>
                <p className={styles.price}>${product.price}</p>
                <p className={styles.discountPrice}>
                  ${product.discountedPrice}
                </p>
              </div>
              <p className={styles.rating}>Rating:{product.rating}/5</p>
              <div className={styles.descContainer}>
                <h4>Description</h4>
                <p>{product.description}</p>
              </div>
              <div className="buttonContainer">
                <PrimaryButton product={product} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/** @format */

import UseFetchData from "../../services/api/UseFetchData/Index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../components/common/buttons/primaryButton/Index";
import styles from "./productDetails.module.css";
import Rating from "../../components/common/rating/Index";
import DiscountBadge from "../../components/common/discountBadge/Index";
import PriceRenderer from "../../components/rendering/priceRender/Index";

export default function ProductDetails() {
  const { id } = useParams();
  const apiUrl = `https://v2.api.noroff.dev/online-shop/${id}`;
  const { data: productData, loading, error } = UseFetchData(apiUrl);
  const [product, setProduct] = useState(null);
  const [hasReviews, setHasReviews] = useState(false);
  

  useEffect(() => {
    if (productData) {
      setProduct(productData);
      if (productData.reviews && productData.reviews.length > 0) {
        setHasReviews(true);
      }
    }
  }, [productData, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <main className={styles.mainContent}>
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
              <PriceRenderer
                discountedPrice={product.discountedPrice}
                price={product.price}
              />
              <div className={styles.descContainer}>
                <h4>Description</h4>
                <p>{product.description}</p>
              </div>
              <div className="buttonContainer">
                <PrimaryButton product={product} />
              </div>
            </div>
          </div>
          <section>
            {hasReviews && (
                <div className={styles.reviewsContainer}>
                  <h4 className={styles.reviewsTitle}>Reviews</h4>
                  {product.reviews.map((review) => (
                    <div key={review.id} className={styles.reviewItem}>
                      <h4><Rating rating={review.rating}/></h4>
                      <p>{review.description}</p>
                      <p>By: {review.username}</p>
                    </div>
                  ))}
                </div>
              )}
          </section>
          
        </>
      )}
    </main>
  );
}

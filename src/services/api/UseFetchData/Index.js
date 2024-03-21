import { useState, useEffect } from "react";

const UseFetchData = (apiUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cartItems, setCartItem] = useState([])

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (isMounted) {
          setData(result.data);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  const addToCart = (product) => {
    setCartItem([...cartItems, product]);
  }
  
  return {data, loading, error, cartItems, addToCart};


};

export default UseFetchData;


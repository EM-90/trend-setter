import { useState, useEffect } from "react";

const UseFetchData = (apiUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [apiUrl]);

  return {data, loading, error};

};

export default UseFetchData;


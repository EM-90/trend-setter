const fetchData = async () => {
    try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null
    }

}

export default fetchData;
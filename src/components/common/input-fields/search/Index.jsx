import { useState } from "react";
import styles from "./search.module.css"

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handelChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
        
    } 

    return (
        <form>
            <input type="text" className={styles.searchInput} placeholder="Search..." value={searchTerm} onChange={handelChange} />
        </form>
    )
}

export default Search;


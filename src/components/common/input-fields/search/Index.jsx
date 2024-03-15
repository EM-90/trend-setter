import { useState } from "react";

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handelChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
        
    } 

    return (
        <form>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handelChange} />
        </form>
    )
}

export default Search;


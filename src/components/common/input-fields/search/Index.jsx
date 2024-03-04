import { useState } from "react";
import { RenderProductCard } from "../../../rendering/RenderProductCard";

const Search = ({ apiUrl }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <RenderProductCard apiUrl={apiUrl} searchQuery={searchQuery}/>
    </div>
  );
};

export default Search;


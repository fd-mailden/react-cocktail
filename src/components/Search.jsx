import React from "react";
import { ReactComponent as SearchIcon } from "../assets/img/search.svg";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder=" Search"
      />
      <SearchIcon className="search__icon" />
    </div>
  );
}

export default Search;

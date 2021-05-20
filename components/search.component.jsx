import React, { useContext } from "react";
import { RandomUsersContext } from "../pages/index";

const Search = ({ onSearch }) => {
  const { onSearch } = useContext(RandomUsersContext);
  return (
    <span className="nav-right">
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={onSearch}
      />
    </span>
  );
};

export default Search;

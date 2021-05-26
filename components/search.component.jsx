import { useContext } from "react";
import { RandomUsersContext } from "../pages/_app";

const Search = () => {
  const { onSearch } = useContext(RandomUsersContext);

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <span className="nav-right">
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </span>
  );
};

export default Search;

import { useContext, useState } from "react";
import { RandomUsersContext } from "../pages/_app";

const Search = () => {
  const [text, setText] = useState("");
  const { onSearch } = useContext(RandomUsersContext);

  const handleSearch = () => {
    onSearch(text);
  };

  return (
    <span className="nav-right">
      <input
        id="search"
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="nav-search btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </span>
  );
};

export default Search;

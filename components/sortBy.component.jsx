import { useContext, useState } from "react";

import { ActionNames } from "../reducers/actions";
import { RandomUsersContext } from "../context/RandomUsers";

const SortBy = () => {
  const { dispatchProfiles } = useContext(RandomUsersContext);
  const [sortCriteria, setSortCriteria] = useState("first");

  const handleSort = (e) => {
    setSortCriteria(e.target.value || "first");
    dispatchProfiles({
      type: ActionNames.SORT_PROFILES,
      payload: sortCriteria,
    });
  };

  return (
    <span className="nav-right">
      Sort By:&nbsp;
      <select value={sortCriteria} onChange={handleSort}>
        <option value="">--Please choose an option</option>
        <option value="first">First Name</option>
        <option value="last">Last Name</option>
      </select>
    </span>
  );
};

export { SortBy };

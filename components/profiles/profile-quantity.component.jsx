import { useContext } from "react";
import { RandomUsersContext } from "../../context/RandomUsers";

const ProfileQuantity = () => {
  const { setnumProfiles, numProfiles } = useContext(RandomUsersContext);

  return (
    <>
      <span className="nav-right">
        Profiles returned:&nbsp;
        <input
          type="number"
          onChange={(e) => setnumProfiles(e.target.value)}
          min="3"
          max="50"
          value={numProfiles}
          className="profile-quantity"
          data-testid="quantity"
        />
      </span>
    </>
  );
};

export { ProfileQuantity };

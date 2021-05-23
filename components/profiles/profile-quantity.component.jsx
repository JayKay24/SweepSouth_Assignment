import { useContext } from "react";
import { RandomUsersContext } from "../../pages/_app";

const ProfileQuantity = () => {
  const { setnumProfiles, numProfiles } = useContext(RandomUsersContext);

  return (
    <span className="nav-right">
      Profiles returned:&nbsp;
      <input
        type="number"
        onChange={(e) => setnumProfiles(e.target.value)}
        min="3"
        max="50"
        value={numProfiles}
      />
    </span>
  );
};

export default ProfileQuantity;

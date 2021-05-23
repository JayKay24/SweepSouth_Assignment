import { useContext } from "react";
import { RandomUsersContext } from "../pages/_app";
import ProfileDetailsContainer from "../components/containers/profile-details.container";

const ProfileDetails = () => {
  const { selectedProfile } = useContext(RandomUsersContext);
  const {
    name: { title, first, last },
    picture: { large },
  } = selectedProfile;

  const renderProfile = (profile) => {
    return (
      <>
        <div className="avatar">
          <h4>
            Name: {title}. {first} {last}
          </h4>
          <img src={large} alt="avatar" />
        </div>
        <code>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </code>
      </>
    );
  };

  return (
    <ProfileDetailsContainer>
      {selectedProfile && renderProfile(selectedProfile)}
      {!selectedProfile && <div>Loading...</div>}
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;

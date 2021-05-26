import { useContext } from "react";

import ProfilesContainer from "../components/containers/profiles.container";
import ProfileCard from "../components/profiles/profile-card.component";
import { RandomUsersContext } from "./_app";

const LandingPage = () => {
  const { profiles, isLoading } = useContext(RandomUsersContext);

  const renderProfiles = (profiles) => {
    if (profiles.length === 0) {
      return <div>No profiles to display...</div>;
    } else {
      return (
        <ProfilesContainer>
          {profiles.map((profile) => (
            <ProfileCard key={profile.cell} profile={profile} />
          ))}
        </ProfilesContainer>
      );
    }
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && renderProfiles(profiles)}
    </>
  );
};

export default LandingPage;

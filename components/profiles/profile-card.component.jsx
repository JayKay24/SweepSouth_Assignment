import { useContext } from "react";
import Router from "next/router";
import { ProfileCardContainer } from "../containers/profile-card.container";
import { RandomUsersContext } from "../../context/RandomUsers";

const ProfileCard = ({ profile }) => {
  const {
    picture,
    location,
    name: { title, first, last },
  } = profile;

  const { setSelectedProfile } = useContext(RandomUsersContext);

  const handleNavigateToUser = () => {
    setSelectedProfile(profile);
    Router.push(
      "/profile-details-[profileId].component",
      `/profile-details-${first}-${last}`
    );
  };

  return (
    <ProfileCardContainer onClick={handleNavigateToUser}>
      <img src={picture.large} alt="avatar" />
      <div className="card-details">
        <h4>
          {title}. {first} {last}
        </h4>
        <p>{location.city}</p>
      </div>
    </ProfileCardContainer>
  );
};

export { ProfileCard };

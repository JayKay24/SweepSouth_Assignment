import React from "react";
import Router from "next/router";
import ProfileCardContainer from "../containers/profile-card.container";

const ProfileCard = ({ profile }) => {
  const {
    picture,
    location,
    name: { title, first, last },
  } = profile;

  const handleNavigateToUser = () => {
    Router.push(
      "/profile-details-[profileId]",
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

export default ProfileCard;

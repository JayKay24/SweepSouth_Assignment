import React from "react";
import ProfileCardContainer from "../containers/profile-card.container";

const ProfileCard = ({
  profile: {
    picture,
    location,
    name: { title, first, last },
  },
}) => {
  return (
    <ProfileCardContainer>
      <img src={picture.thumbail} alt="thumbnail" />
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

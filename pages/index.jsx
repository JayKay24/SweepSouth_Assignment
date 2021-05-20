import React, { useReducer } from "react";

import { ActionNames } from "../reducers/actions";
import { profilesReducer } from "../reducers/reducers";

import NavBar from "../components/navigation.component";
import ProfilesContainer from "../components/containers/profiles.container";
import ProfileCard from "../components/profiles/profile-card.component";

export const RandomUsersContext = React.createContext();

const LandingPage = ({ data: profiles, error }) => {
  const [profiles, dispatchProfiles] = useReducer(profilesReducer, []);

  const onSearch = (searchValue) => {
    const newProfiles = profiles.filter((profile) => {
      if (
        profile.name.title === searchValue ||
        profile.name.first === searchValue ||
        profile.name.last === searchValue
      ) {
        return profile;
      }
    });

    dispatchProfiles({ type: ActionNames.SET_PROFILES, payload: newProfiles });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <RandomUsersContext.Provider value={{ profiles, onSearch }}>
        <NavBar />
        <h1>Random Users</h1>
        <br />
        <ProfilesContainer>
          {profiles.map((profile) => (
            <ProfileCard key={profile.cell} profile={profile} />
          ))}
        </ProfilesContainer>
      </RandomUsersContext.Provider>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const data = await res.json();
    console.log("Here", profiles);
    return { props: { data } };
  } catch (error) {
    return { props: { error } };
  }
}

export default LandingPage;

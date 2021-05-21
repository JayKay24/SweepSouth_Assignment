import React, { useReducer, useEffect, useState } from "react";

import { ActionNames } from "../reducers/actions";
import { profilesReducer } from "../reducers/reducers";

import AppContainer from "../components/containers/App.container";
import NavBar from "../components/navigation.component";
import ProfilesContainer from "../components/containers/profiles.container";
import ProfileCard from "../components/profiles/profile-card.component";

export const RandomUsersContext = React.createContext();

const LandingPage = () => {
  const [profiles, dispatchProfiles] = useReducer(profilesReducer, []);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [numProfiles, setnumProfiles] = useState(3);

  const onSearch = (searchValue) => {
    setSearchValue(searchValue);
    if (searchValue) {
      const newProfiles = profiles.filter((profile) => {
        if (
          profile.name.title === searchValue ||
          profile.name.first === searchValue ||
          profile.name.last === searchValue
        ) {
          return profile;
        }
      });

      dispatchProfiles({
        type: ActionNames.SET_PROFILES,
        payload: newProfiles,
      });
    }
  };

  useEffect(() => {
    const fetchUserProfiles = async () => {
      if (searchValue.length === 0) {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://randomuser.me/api/?results=${Number(numProfiles)}`
          );
          const { results } = await res.json();
          dispatchProfiles({
            type: ActionNames.SET_PROFILES,
            payload: [...results],
          });
        } catch (error) {
          console.error(error);
          dispatchProfiles({ type: ActionNames.SET_PROFILES, payload: [] });
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchUserProfiles();
  }, [searchValue, numProfiles]);

  const renderProfiles = (profiles) => (
    <ProfilesContainer>
      {profiles.map((profile) => (
        <ProfileCard key={profile.cell} profile={profile} />
      ))}
    </ProfilesContainer>
  );

  return (
    <RandomUsersContext.Provider
      value={{
        profiles,
        onSearch,
        setIsLoading,
        setnumProfiles,
        numProfiles,
      }}
    >
      <AppContainer>
        <NavBar />
        <h1>Random Users</h1>
        <br />
        {isLoading && <div>Loading...</div>}
        {!isLoading && renderProfiles(profiles)}
      </AppContainer>
    </RandomUsersContext.Provider>
  );
};

export default LandingPage;

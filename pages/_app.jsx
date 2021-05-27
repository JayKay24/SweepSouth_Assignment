import { useReducer, useEffect, useState, createContext } from "react";
import Router from "next/router";

import { ActionNames } from "../reducers/actions";
import { profilesReducer } from "../reducers/reducers";

import AppContainer from "../components/containers/App.container";
import NavBar from "../components/navigation.component";

export const RandomUsersContext = createContext();

const App = ({ Component, pageProps }) => {
  const [profiles, dispatchProfiles] = useReducer(profilesReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [numProfiles, setnumProfiles] = useState(9);
  const [selectedProfile, setSelectedProfile] = useState({});
  const [originalProfiles, setOriginalProfiles] = useState([]);

  const onSearch = (searchValue) => {
    if (searchValue) {
      dispatchProfiles({
        type: ActionNames.SET_PROFILES,
        payload: [...originalProfiles],
      });
      dispatchProfiles({
        type: ActionNames.FILTER_PROFILE_BY_NAME,
        payload: searchValue,
      });

      Router.push("/");
    }
    if (!searchValue) {
      dispatchProfiles({
        type: ActionNames.SET_PROFILES,
        payload: [...originalProfiles],
      });
    }
  };

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://randomuser.me/api/?results=${Number(numProfiles)}`
        );
        const { results } = await res.json();
        setIsLoading(false);
        dispatchProfiles({
          type: ActionNames.SET_PROFILES,
          payload: [...results],
        });
        setOriginalProfiles([...results]);
      } catch (error) {
        console.error(error);
        dispatchProfiles({ type: ActionNames.SET_PROFILES, payload: [] });
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfiles();
  }, [numProfiles]);

  return (
    <RandomUsersContext.Provider
      value={{
        profiles,
        onSearch,
        setIsLoading,
        setnumProfiles,
        numProfiles,
        selectedProfile,
        setSelectedProfile,
        isLoading,
        dispatchProfiles,
      }}
    >
      <AppContainer>
        <NavBar />
        <div className="title">
          <h1>Random Users</h1>
        </div>
        <hr />
        <br />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </AppContainer>
    </RandomUsersContext.Provider>
  );
};

export default App;

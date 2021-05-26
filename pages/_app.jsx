import { useReducer, useEffect, useState, createContext } from "react";
import Router from "next/router";

import { ActionNames } from "../reducers/actions";
import { profilesReducer } from "../reducers/reducers";

import AppContainer from "../components/containers/App.container";
import NavBar from "../components/navigation.component";
import "bootstrap/dist/css/bootstrap.css";

export const RandomUsersContext = createContext();

const App = ({ Component, pageProps }) => {
  const [profiles, dispatchProfiles] = useReducer(profilesReducer, []);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [numProfiles, setnumProfiles] = useState(3);
  const [selectedProfile, setSelectedProfile] = useState({});

  const onSearch = (searchValue) => {
    setSearchValue(searchValue);
    if (searchValue) {
      dispatchProfiles({
        type: ActionNames.FILTER_PROFILE_BY_NAME,
        payload: searchValue,
      });

      Router.push("/");
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
          setIsLoading(false);
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
      }}
    >
      <AppContainer>
        <NavBar />
        <h1>Random Users</h1>
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

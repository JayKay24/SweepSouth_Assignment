import { useContext } from "react";
import Pagination from "react-js-pagination";

import ProfilesContainer from "../components/containers/profiles.container";
import ProfileCard from "../components/profiles/profile-card.component";
import PaginationContainer from "../components/containers/pagination-container";
import { RandomUsersContext } from "./_app";

const LandingPage = () => {
  const { profiles, isLoading, pages, setPages, numProfiles } =
    useContext(RandomUsersContext);

  const renderProfiles = (profiles) => (
    <ProfilesContainer>
      {profiles.map((profile) => (
        <ProfileCard key={profile.cell} profile={profile} />
      ))}
    </ProfilesContainer>
  );

  const handlePageChange = (pageNumber) => setPages(pageNumber);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && renderProfiles(profiles)}
      {!isLoading && (
        <PaginationContainer>
          <Pagination
            activePage={pages}
            itemsCountPerPage={numProfiles}
            pageRangeDisplayed={5}
            totalItemsCount={numProfiles}
            onChange={handlePageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </PaginationContainer>
      )}
    </>
  );
};

export default LandingPage;

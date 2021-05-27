import { render, screen } from "@testing-library/react";
import { NavBar } from "../components/navigation.component";
import { RandomUsersContext } from "../context/RandomUsers";

jest.mock("../components/profiles/profile-quantity.component", () => ({
  ProfileQuantity: () => <span>Profile Quantity</span>,
}));
jest.mock("../components/sortBy.component", () => ({
  SortBy: () => <span>Sort by</span>,
}));
jest.mock("../components/search.component", () => ({
  Search: () => <span>Search</span>,
}));

const onSearch = jest.fn(() => {});
const setnumProfiles = jest.fn(() => {});
const numProfiles = 9;
const dispatchProfiles = jest.fn(() => {});

describe("Navigation", () => {
  it("renders successfully", () => {
    render(
      <RandomUsersContext.Provider
        value={{
          onSearch,
          setnumProfiles,
          numProfiles,
          dispatchProfiles,
          onSearch,
        }}
      >
        <NavBar />
      </RandomUsersContext.Provider>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Profile Quantity/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});

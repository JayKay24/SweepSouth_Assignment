import { render, screen } from "@testing-library/react";
import NavBar from "../navigation.component";
import { RandomUsersContext } from "../../pages/_app";

jest.mock("../profiles/profile-quantity.component", () => ({
  ProfileQuantity: () => <span>Profile Quantity</span>,
}));
jest.mock("../sortBy.component", () => ({
  SortBy: () => <span>Sort by</span>,
}));
jest.mock("../search.component", () => ({ Search: () => <span>Search</span> }));

describe("Navigation", () => {
  it("renders successfully", () => {
    render(
      <RandomUsersContext.Provider>
        <NavBar />
      </RandomUsersContext.Provider>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Profile Quantity/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});

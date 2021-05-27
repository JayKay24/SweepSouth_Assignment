import { screen, render } from "@testing-library/react";

import { RandomUsersContext } from "../context/RandomUsers";
import { SortBy } from "../components/sortBy.component";

const onSearch = jest.fn(() => {});

describe("Home Page", () => {
  it("renders successfully", () => {
    render(
      <RandomUsersContext.Provider value={{ onSearch }}>
        <SortBy />
      </RandomUsersContext.Provider>
    );
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});

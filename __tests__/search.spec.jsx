import { screen, render } from "@testing-library/react";

import { RandomUsersContext } from "../context/RandomUsers";
import { Search } from "../components/search.component";

const onSearch = jest.fn(() => {});

describe("Home Page", () => {
  it("renders successfully", () => {
    render(
      <RandomUsersContext.Provider value={{ onSearch }}>
        <Search />
      </RandomUsersContext.Provider>
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

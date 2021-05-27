import { screen, render } from "@testing-library/react";

import { RandomUsersContext } from "../context/RandomUsers";
import { ProfileQuantity } from "../components/profiles/profile-quantity.component";

const setnumProfiles = jest.fn(() => {});
const numProfiles = 9;

describe("Home Page", () => {
  it("renders successfully", () => {
    render(
      <RandomUsersContext.Provider value={{ setnumProfiles, numProfiles }}>
        <ProfileQuantity />
      </RandomUsersContext.Provider>
    );
    expect(screen.getByText(/Profiles returned:/i)).toBeInTheDocument();
    expect(screen.getByTestId("quantity").value).toEqual(
      numProfiles.toString()
    );
  });
});

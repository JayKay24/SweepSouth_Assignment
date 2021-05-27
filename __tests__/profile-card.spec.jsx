import { screen, render } from "@testing-library/react";

import { RandomUsersContext } from "../context/RandomUsers";
import { ProfileCard } from "../components/profiles/profile-card.component";

const setSelectedProfile = jest.fn((profile) => {});
const profile = {
  picture: { large: "https://randomuser.me/api/portraits/women/11.jpg" },
  location: { city: "Nairobi" },
  name: { first: "a", last: "b", title: "Mr" },
};

describe("Home Page", () => {
  it("renders successfully", () => {
    render(
      <RandomUsersContext.Provider value={{ setSelectedProfile }}>
        <ProfileCard profile={profile} />
      </RandomUsersContext.Provider>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img").src).toEqual(profile.picture.large);
  });
});

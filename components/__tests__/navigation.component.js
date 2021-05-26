import { render } from "@testing-library/react";
import NavBar from "../navigation.component";

describe("Navigation", () => {
  it("renders successfully", () => {
    const { container } = render(<NavBar />);
    expect(container.innerHTML).toMatch("Home");
  });
});

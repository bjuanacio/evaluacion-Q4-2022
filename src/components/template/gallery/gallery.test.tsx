import { render, screen } from "@testing-library/react";
import { Gallery } from "./gallery";

describe("TopBar", () => {
  it("should render successfully", () => {
    render(<Gallery />);
    expect(screen.getByTestId("image-grid")).toBeInTheDocument();
  });
});

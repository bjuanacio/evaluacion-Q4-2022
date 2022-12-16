import { render, screen } from "@testing-library/react";
import AlertBanner from "./alert-banner";

describe("Alert Banner Component", () => {
  it("should render the warning icon", () => {
    render(<AlertBanner content="Test" />);
    const img = screen.getByAltText("Warning Icon");
    expect(img).toBeInTheDocument();
  });

  it("should render a text", () => {
    render(<AlertBanner content="Test" />);
    const text = screen.getByText("Test");
    expect(text).toBeInTheDocument();
  });
});

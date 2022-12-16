import { render, screen } from "@testing-library/react";
import TopBar from "./top-bar";

describe("Top Bar Component", () => {
  it("should render an input element", () => {
    render(<TopBar addGif={() => {}} validUrl={false} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should render a button element", () => {
    render(<TopBar addGif={() => {}} validUrl={false} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

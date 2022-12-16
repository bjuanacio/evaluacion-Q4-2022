import { render, screen } from "@testing-library/react";
import { TopBar } from "./top-bar";

describe("Top Bar Component", () => {
  it("should render one input element", () => {
    render(
      <TopBar
        gifUrl=""
        handleAddGif={() => {}}
        gifsList={[]}
        handleGifUrl={() => {}}
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("should render one button element", () => {
    render(
      <TopBar
        gifUrl=""
        handleAddGif={() => {}}
        gifsList={[]}
        handleGifUrl={() => {}}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
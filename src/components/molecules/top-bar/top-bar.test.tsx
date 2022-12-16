import { render, screen } from "@testing-library/react";
import { TopBar } from "./top-bar";

describe("TopBar", () => {
  const handleInput = jest.fn();
  const handleClick = jest.fn();
  it("should render input text and button", () => {
    render(
      <TopBar handleUrlInputChange={handleInput} handleAddClick={handleClick} />
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

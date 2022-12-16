import { render, screen } from "@testing-library/react";
import { TopBar } from "./top-bar";

describe("Input", () => {
  const handleInput = jest.fn();
  const handleClick = jest.fn();
  it("should render input text", () => {
    render(
      <TopBar handleUrlInputChange={handleInput} handleAddClick={handleClick} />
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

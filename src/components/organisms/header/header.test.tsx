import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
  const handleInput = jest.fn();
  const handleClick = jest.fn();
  it("should render a title", () => {
    render(
      <Header title="Gif Galery" handleUrlInputChange={handleInput} handleAddClick={handleClick} />
    );
    expect(screen.getByText("Gif Galery")).toBeInTheDocument(); 
  });
});

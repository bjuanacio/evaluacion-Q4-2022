import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("TopBar", () => {
  const handleDelete = jest.fn();
  const mockGif = {
    author_id: 15,
    id: 1,
    url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
  };
  it("should render delete button", () => {
    render(<Card handleDeleteClick={handleDelete} gif={mockGif} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

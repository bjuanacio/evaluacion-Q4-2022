import { render, screen } from "@testing-library/react";
import { Gif } from "../../../utils/interfaces/gif";
import { ImageGrid } from "./image-grid";

describe("TopBar", () => {
  const handleDeleteClick = jest.fn();
  const mockGifs: Gif[] = [
    {
      author_id: 15,
      id: 1,
      url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
    },
    {
      author_id: 15,
      id: 2,
      url: `https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif`,
    },
  ];
  it("should render successfully", () => {
    render(<ImageGrid handleGifDelete={handleDeleteClick} gifs={mockGifs} />);
    expect(screen.getByTestId("image-grid")).toBeInTheDocument();
  });
});

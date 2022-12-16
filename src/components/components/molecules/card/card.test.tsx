import { render, screen } from "@testing-library/react";
import Card from "./card";
import { Gif } from "../../../../utils/interfaces/gif";

describe("Card Componet", () => {
  const gif: Gif = {
    author_id: 21,
    url: "google.com",
    id: 1,
  };
  it("should render a card with gif", () => {
    render(<Card gif={gif} deleteGif={() => {}} />);
    const img = screen.getByAltText("gif-1");
    expect(img).toBeInTheDocument();
  });

  it("should render a close icon", () => {
    const { container } = render(<Card gif={gif} deleteGif={() => {}} />);
    const icon = container.getElementsByClassName("card__delete-icon");
    expect(icon).toHaveLength(1);
  });
});

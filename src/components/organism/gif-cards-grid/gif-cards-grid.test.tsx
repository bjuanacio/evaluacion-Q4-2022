import { fireEvent, render, screen } from "@testing-library/react";
import GifCardsGrid from "./gif-cards-grid";

describe("Gif Cards Grid Test", () => {
  const test = [
    {
      id: 1,
      url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
      author_id: 11,
    },
    {
      id: 2,
      url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
      author_id: 11,
    },
    {
      id: 3,
      url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
      author_id: 11,
    },
    {
      id: 4,
      url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
      author_id: 11,
    },
    {
      id: 5,
      url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
      author_id: 11,
    },
    {
      id: 6,
      url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
      author_id: 11,
    },
  ];

  it("displays the empty gifs message", () => {
    render(<GifCardsGrid gifsList={[]} handleDelete={() => {}} />);
    const message = screen.getByText(/No existen gifs registrados/i);
    expect(message).toBeInTheDocument();
  });

  it("displays a list of 6 gifs", () => {
    render(<GifCardsGrid gifsList={test} handleDelete={() => {}} />);
    const cards = screen.getAllByAltText(/media.tenor.com/i);
    expect(cards).toHaveLength(6);
  });
});

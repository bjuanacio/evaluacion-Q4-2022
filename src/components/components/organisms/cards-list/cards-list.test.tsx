import { render, screen } from "@testing-library/react";
import CardsList from "./cards-list";
import { Gif } from "../../../../utils/interfaces/gif";
import { Info } from "../../../../utils/enums/info";

describe("Card List Component", () => {
  it("should render a empty message when user list is empty", () => {
    render(<CardsList gifs={[]} deleteGif={() => {}} />);
    const message = screen.getByText(Info.EMPTY_LIST_MESSAGE);
    expect(message).toBeInTheDocument();
  });

  it("should render a gifs list ", () => {
    const gifs: Gif[] = [
      {
        id: 1,
        author_id: 21,
        url: "test.com",
      },
    ];
    render(<CardsList gifs={gifs} deleteGif={() => {}} />);
    const images = screen.getByAltText("gif-1");
    expect(images).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { DEFAULT_IMAGE } from "../../../utils/constants/gif";
import { Gif } from "../../../utils/interfaces/gif";
import ListCard from "./list-card";

describe("Cards Grid Component", () => {
  const gifList: Gif[] = [
    {
      id: 37,
      url: "https://media.tenor.com/-SELJ9J3DdkAAAAM/thor-marvel.gif",
      author_id: 22,
    },
    {
      id: 38,
      url: "https://media.tenor.com/4S4yHRykP1cAAAAM/avengers-assemble8bi-t-8bit-art.gif",
      author_id: 22,
    },
  ];
  it("should display the empty gif message", () => {
    render(<ListCard gifsList={[]} deleteGif={() => {}} />);
    const message = screen.getByText("No posee gifs...");
    expect(message).toBeVisible();
  });

  it("should display a list of two gifs", () => {
    render(<ListCard gifsList={gifList} deleteGif={() => {}} />);
    const cards = screen.getAllByRole("img");
    expect(cards).toHaveLength(2);
  });
});

import { render, screen } from "@testing-library/react";
import { mockedGifs } from "../../../utils/constants/gifs";
import GifList from "./gif-list";

describe("GifList tests", () => {
  const onDelete = jest.fn();
  it("should render empty state when gifs prop is empty", () => {
    render(<GifList gifs={[]} onDelete={onDelete} />);
    expect(screen.getByTestId("emptygiflist-testid")).toBeVisible();
  });

  it("should render gifs cards when gifs prop is not empty", () => {
    render(<GifList gifs={mockedGifs} onDelete={onDelete} />);
    expect(screen.getByTestId("giflist-testid")).toBeVisible();
  });
});

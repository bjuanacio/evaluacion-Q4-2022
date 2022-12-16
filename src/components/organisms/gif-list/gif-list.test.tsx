import { render, screen } from "@testing-library/react";
import GifList from "./gif-list";

describe("GifList tests", () => {
  it("should render empty state when gifs prop is empty", () => {
    render(<GifList gifs={[]} />);
    expect(screen.getByTestId("emptygiflist-testid")).toBeVisible();
  });
});

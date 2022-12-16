import { render, screen } from "@testing-library/react";
import EmptyGifList from "./empty-gif-list";

describe("EmptyGifList tests", () => {
  it("should render EmptyGifList", () => {
    render(<EmptyGifList />);
    expect(screen.getByText("No posee gifs")).toBeVisible();
  });
});

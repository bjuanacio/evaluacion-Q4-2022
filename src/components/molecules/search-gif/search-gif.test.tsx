import { render, screen } from "@testing-library/react";
import SearchGif from "./search-gif";

describe("SearchGif tests", () => {
  const onChange = jest.fn();
  const onClick = jest.fn();
  it("should render an input and a button", () => {
    render(
      <SearchGif onChange={onChange} onClick={onClick} inputValue="TEST" />
    );
    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByRole("button")).toBeVisible();
  });
});

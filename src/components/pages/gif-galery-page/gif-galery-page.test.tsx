import { render, screen } from "@testing-library/react";
import GifGaleryPage from "./gif-galery-page";
import useGifGaleryPage from "./use-gif-galery-page/use-gif-galery-page";

jest.mock("./use-gif-galery-page/use-gif-galery-page");
const mockedUseGifGaleryPage = useGifGaleryPage as jest.MockedFunction<
  typeof useGifGaleryPage
>;

describe("GifGaleryPage tests", () => {
  beforeEach(() => {
    mockedUseGifGaleryPage.mockReturnValue({
      addGif: jest.fn(),
      deleteGif: jest.fn(),
      error: "",
      gifs: [],
      handleSearchInput: jest.fn(),
      url: "",
    });
  });

  it("should render GifGalery title, input and list", () => {
    render(<GifGaleryPage />);
    expect(screen.getByRole("heading", { name: /Gif Galery/i })).toBeVisible();
    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByTestId("giflist-testid")).toBeVisible();
  });
});

import { render, screen } from "@testing-library/react";
import GifGaleryPage from "./gif-galery-page";
import GifService from "../../../services/gif-service/gif-service";
import { mockedGifs } from "../../../utils/constants/gifs";

jest.mock("../../../services/gif-service/gif-service");
const mockedGifService = GifService as jest.Mocked<typeof GifService>;

describe("GifGaleryPage tests", () => {
  beforeEach(() => {
    mockedGifService.getGifsByAuthorId.mockResolvedValue(mockedGifs);
  });

  it("should render GifGalery title, input and list", () => {
    render(<GifGaleryPage />);
    expect(screen.getByRole("heading", { name: /Gif Galery/i })).toBeVisible();
    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByTestId("giflist-testid")).toBeVisible();
  });
});

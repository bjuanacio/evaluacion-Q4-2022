import axios from "axios";
import { Gif } from "../../utils/interfaces/gif";
import { fetchGifs, addGif, deleteGif } from "./gif.service";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe("Gif Service", () => {
  const gifs: Gif[] = [
    {
      id: '1',
      author_id: '15',
      url: "https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif",
    },
  ];

  const mockGif: Gif = {
    id: '1',
    author_id: '15',
    url: "https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif",
  };

  it("should return gif lists", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: gifs });
    const gifsResponse = await fetchGifs();
    expect(gifsResponse).toEqual(gifs);
  });

  it("should return gif when addGif is called", async () => {
    jest.spyOn(axios, "post").mockResolvedValue({ data: mockGif });
    const gifsResponse = await addGif(mockGif);
    expect(gifsResponse).toEqual(mockGif);
  });

  it("should delete gif when deleteGif is called", async () => {
    mockAxios.delete.mockResolvedValue({ data: {} });

    const gifsResponse = await deleteGif(mockGif);

    expect(gifsResponse).toEqual(true);
  });
});

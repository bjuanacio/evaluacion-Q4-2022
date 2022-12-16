import axios from "axios";
import GifService from "./gif-service";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("GifService tests", () => {
  const mockedGifs = [
    { id: 3, url: "example.com", author_id: 1 },
    { id: 5, url: "example.com", author_id: 1 },
  ];

  it("should return a list of gifs", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockedGifs,
    });

    const gifs = await GifService.getGifsByAuthorId();

    expect(gifs).toEqual(mockedGifs);
  });

  it("should post a new gif", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: mockedGifs[0],
    });

    const gif = await GifService.postNewGif("example.com");

    expect(gif).toEqual(mockedGifs[0]);
  });

  it("should delete a gif", async () => {
    mockedAxios.delete.mockResolvedValueOnce({
      data: mockedGifs[0],
    });

    const gif = await GifService.deleteGif(1, "example.com");

    expect(gif).toEqual(mockedGifs[0]);
  });
});

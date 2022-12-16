import { addGif, deleteGif, fetchGifs } from "./gifs";
import { Gif } from "./../../utils/interfaces/gif";
import axios from "axios";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe("Gifs Service", () => {
  it("should return gifs list", async () => {
    const gifs: Gif[] = [{ id: 1, url: "www.google.com", author_id: 1 }];
    jest.spyOn(axios, "get").mockResolvedValue({ data: gifs });
    const gifsResponse = await fetchGifs();
    expect(gifsResponse).toEqual(gifs);
  });

  it("should return player when addPlayer is called", async () => {
    const gif: Gif = {
      id: 1,
      url: "www.google.com",
      author_id: 1,
    };
    jest.spyOn(axios, "post").mockResolvedValue({ data: gif });
    const gifResponse = await addGif(gif);
    expect(gifResponse).toEqual(gif);
  });

  it("should delete player when deletePlayer is called", async () => {
    mockAxios.delete.mockResolvedValue({ data: true });
    const gif: Gif = {
      id: 1,
      url: "www.google.com",
      author_id: 1,
    };
    const playerResponse = await deleteGif(gif);
    expect(playerResponse).toEqual(true);
  });
});

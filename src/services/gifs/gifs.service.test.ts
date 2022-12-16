import axios from "axios";
import { Gif } from "../../utils/interfaces/gifs";
import { deleteGif, fetchGifs, postGif } from "./gifs.service";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe("Gifs service", () => {
  it("returns gifs list", async () => {
    const gifs: Gif[] = [
      {
        id: 1,
        url: "example.com",
        author_id: 1,
      },
      {
        id: 2,
        url: "example2.com",
        author_id: 1,
      },
    ];

    mockAxios.get.mockResolvedValue({ data: gifs });
    const response = await fetchGifs();
    expect(response).toEqual(gifs);
  });

  it("returns a gif when postGif is called", async () => {
    const gifExample: Gif = {
      id: 1,
      url: "example.com",
      author_id: 1,
    };
    mockAxios.post.mockResolvedValue({ data: gifExample });
    const response = await postGif(gifExample);
    expect(response).toEqual(gifExample);
  });

  it("returns true when deleteGif is called", async () => {
    const gifExample: Gif = {
      id: 1,
      url: "example.com",
      author_id: 1,
    };
    mockAxios.delete.mockResolvedValue({ data: gifExample });
    const response = await deleteGif(gifExample);
    expect(response).toEqual(true);
  });
});

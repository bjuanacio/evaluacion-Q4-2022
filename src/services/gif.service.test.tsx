import axios from "axios";
import { Gif } from "../utils/interfaces/gif";
import { addGif, getGif, deleteGif } from "./gif.service";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe("Gif Service", () => {
  it("should return gifs lists", async () => {
    const gifs: Gif[] = [
      {
        id: 1,
        url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
        author_id: 1,
      },
    ];
    jest.spyOn(axios, "get").mockResolvedValue({ data: gifs });
    const gifsResponse = await getGif();
    expect(gifsResponse).toEqual(gifs);
  });

  it("should return gif when addGif is called", async () => {
    const gif: Gif = {
      id: 2,
      url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
      author_id: 1,
    };
    jest.spyOn(axios, "post").mockResolvedValue({ data: gif });
    const gifResponse = await addGif(gif);
    expect(gifResponse).toEqual(gif);
  });

  it("should delete gif when deleteGif is called", async () => {
    const gif: Gif = {
      id: 2,
      url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
      author_id: 1,
    };
    jest.spyOn(axios, "delete").mockResolvedValue({ data: gif });

    const playerResponse = await deleteGif(gif);
    console.log(playerResponse);

    expect(playerResponse).toEqual(true);
  });
});

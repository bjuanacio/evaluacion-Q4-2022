import axios from "axios";
import { Gift } from "../utils/interfaces/gift";
import { addGift, deleteGift, getGifts } from "./gift.service";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

describe("Gift Service", () => {
  test("should return gif list", async () => {
    const gift: Gift[] = [
      {
        id: 444,
        url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
        author_id: 4,
      },
    ];
    jest.spyOn(axios, "get").mockResolvedValue({ data: gift });
    const gifsResponse = await getGifts();
    expect(gifsResponse).toEqual(gift);
  });

  test("should return gift when addGift is called", async () => {
    const gift: Gift = {
      id: 444,
      url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
      author_id: 4,
    };

    jest.spyOn(axios, "post").mockResolvedValue({ data: gift });
    const gifsResponse = await addGift('https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif');
    expect(gifsResponse).toEqual(true);
  });

  test("should return gift when deleteGift is called", async () => {
    const gift: Gift = {
      id: 444,
      url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
      author_id: 4,
    };

    jest.spyOn(axios, "delete").mockResolvedValue({ data: gift });
    const gifsResponse = await deleteGift(444);
    expect(gifsResponse).toEqual(true);
  });
});

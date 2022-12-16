import { renderHook, act, waitFor } from "@testing-library/react";
import axios from "axios";
import { Gif } from "../../../utils/interfaces/gifs";
import useGifsContext from "./use-gifs-context";

describe("use gifs test", () => {
  it("fetch gifs", async () => {
    const testValues = [
      {
        id: 1,
        url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
        author_id: 11,
      },
      {
        id: 2,
        url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
        author_id: 11,
      },
      {
        id: 3,
        url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
        author_id: 11,
      },
      {
        id: 4,
        url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
        author_id: 11,
      },
      {
        id: 5,
        url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
        author_id: 11,
      },
      {
        id: 6,
        url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
        author_id: 11,
      },
    ];
    const mockGet = jest
      .spyOn(axios, "get")
      .mockResolvedValue({ data: testValues });
    const { result } = renderHook(() => useGifsContext());
    act(() => {
      result.current.getGifList();
    });
    await waitFor(() => {
      expect(result.current.gifList).toEqual(testValues);
      expect(mockGet).toBeCalled();
    });
  });

  it("should add gif when addGif function is called", async () => {
    const testGif: Gif = {
      id: 1,
      url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
      author_id: 11,
    };
    const mockPost = jest
      .spyOn(axios, "post")
      .mockResolvedValue({ data: testGif });
    const mockGet = jest
      .spyOn(axios, "get")
      .mockResolvedValue({ data: [testGif] });

    const { result } = renderHook(() => useGifsContext());
    act(() => {
      result.current.addGif(testGif);
    });

    await waitFor(() => {
      expect(result.current.gifList).toHaveLength(1);
      expect(mockPost).toBeCalled();
      expect(mockGet).toBeCalled();
    });
  });

  it("should delete gif when deleteGif function is called", async () => {
    const testGif: Gif = {
      id: 1,
      url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
      author_id: 11,
    };
    const mockDelete = jest
      .spyOn(axios, "delete")
      .mockResolvedValue({ data: testGif });
    const mockGet = jest
      .spyOn(axios, "get")
      .mockResolvedValue({ data: [] });

    const { result } = renderHook(() => useGifsContext());
    act(() => {
      result.current.deleteGif(testGif);
    });

    await waitFor(() => {
      expect(result.current.gifList).toHaveLength(0); 
      expect(mockDelete).toBeCalled();
      expect(mockGet).toBeCalled(); 
    });
  });
});

import { renderHook, act } from "@testing-library/react-hooks";
import useGifs from "./use-gifs";
import axios from "axios";

describe("useGifs hook", () => {
  it("should have an empty gifs list", () => {
    const { result } = renderHook(() => useGifs());
    expect(result.current.gifsList).toHaveLength(0);
  });

  it("should add a gif when addUser function is executed", () => {
    const { result } = renderHook(() => useGifs());
    act(() => {
      result.current.addGif("google.com");
    });
    expect(result.current.gifsList).toHaveLength(1);
  });

  it("should validUrl to be false when url is empty", () => {
    const { result } = renderHook(() => useGifs());
    act(() => {
      result.current.addGif("");
    });
    expect(result.current.validUrl).toBeFalsy();
  });

  it("should have gifs when getGifs function is executed", async () => {
    const gifLists = [{ id: 1, author_id: 21, url: "google.com" }];

    const mockGet = jest.spyOn(axios, "get").mockResolvedValue({
      data: gifLists,
    });

    const { result, waitForNextUpdate } = renderHook(() => useGifs());
    act(() => {
      result.current.getGifs();
    });

    await waitForNextUpdate();
    expect(result.current.gifsList).toBe(gifLists);
    expect(mockGet).toBeCalled();
  });

  it("should delete a gif when deleteGif function is executed", () => {
    const gifLists = [{ id: 1, author_id: 21, url: "google.com" }];
    const { result } = renderHook(() => useGifs());

    act(() => {
      result.current.deleteGif(gifLists[0]);
    });
    expect(result.current.gifsList).toHaveLength(0);
  });
});

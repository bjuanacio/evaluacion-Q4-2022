import { act, renderHook, waitFor } from "@testing-library/react";
import * as Services from "../../../../services/gif/gif-services";
import useGalery from "./use-galery";

describe("useGalery test", () => {
  const mockCards = [
    {
      id: 1,
      url: "uno",
    },
    {
      id: 2,
      url: "dos",
    },
  ];

  it("should execute getGifs service and set gif state", async () => {
    const mockAxiosGet = jest
      .spyOn(Services, "getGifs")
      .mockResolvedValue(mockCards);

    const { result } = renderHook(() => useGalery());

    await waitFor(async () => {
      expect(mockAxiosGet).toBeCalled();
      expect(result.current.gifs).toEqual(mockCards);
    });
  });

  it("should execute addGif service when handleAddGif is execute and should set gif state", async () => {
    jest.spyOn(Services, "getGifs").mockResolvedValue([]);

    const newItem = {
      id: 3,
      url: "tres",
    };

    const mockAddService = jest
      .spyOn(Services, "addGif")
      .mockResolvedValue(newItem);

    const { result } = renderHook(() => useGalery());

    await act(async () => {
      await result.current.handleAddGif("exampleURL");
    });

    expect(mockAddService).toBeCalledWith("exampleURL");
    expect(result.current.gifs).toEqual([newItem]);
  });

  it("should execute removeGif service when handleDeleteGif is executed and should set gif state", async () => {
    const newItem = {
      id: 3,
      url: "tres",
    };

    jest.spyOn(Services, "getGifs").mockResolvedValue([newItem]);

    const mockRemoveService = jest
      .spyOn(Services, "removeGif")
      .mockResolvedValue(true);

    const { result } = renderHook(() => useGalery());

    await waitFor(async () => {
      expect(result.current.gifs).toEqual([newItem]);
    });

    await act(async () => {
      result.current.handleDeleteGif(newItem);
    });

    expect(mockRemoveService).toBeCalledWith(newItem);
    expect(result.current.gifs).toEqual([]);
  });

  it("should execute removeGif service with an error when handleDeleteGif is executed and should not set gif state", async () => {
    const newItem = {
      id: 3,
      url: "tres",
    };

    jest.spyOn(Services, "getGifs").mockResolvedValue([newItem]);

    const mockRemoveService = jest
      .spyOn(Services, "removeGif")
      .mockResolvedValue(false);

    const { result } = renderHook(() => useGalery());

    await waitFor(async () => {
      expect(result.current.gifs).toEqual([newItem]);
    });

    await act(async () => {
      result.current.handleDeleteGif(newItem);
    });

    expect(mockRemoveService).toBeCalledWith(newItem);
    expect(result.current.gifs).toEqual([newItem]);
  });
});

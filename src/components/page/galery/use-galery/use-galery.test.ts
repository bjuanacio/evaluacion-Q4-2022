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
      await act(async () => {});
    });

    expect(mockAxiosGet).toBeCalled();
    expect(result.current.gifs).toEqual(mockCards);
  });

  it("should execute addGif service when handleAddGif is execute and should set git state", async () => {
    jest.spyOn(Services, "getGifs").mockResolvedValue([]);

    const newItem = {
      id: 3,
      url: "tres",
    };

    const mockAddService = jest
      .spyOn(Services, "addGif")
      .mockResolvedValue(newItem);

    const { result } = renderHook(() => useGalery());

    await waitFor(async () => {
      await act(async () => {});
    });

    await act(async () => {
      await result.current.handleAddGif("exampleURL");
      await act(() => {});
    });

    expect(mockAddService).toBeCalledWith("exampleURL");
    expect(result.current.gifs).toEqual([newItem]);
  });
});

import { act, renderHook, waitFor } from "@testing-library/react";
import useGifGaleryPage from "./use-gif-galery-page";
import GifService from "../../../../services/gif-service/gif-service";
import { mockedGifs } from "../../../../utils/constants/gifs";

jest.mock("../../../../services/gif-service/gif-service");
const mockedGifService = GifService as jest.Mocked<typeof GifService>;

describe("useGifGaleryPage tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedGifService.getGifsByAuthorId.mockResolvedValue([]);
  });

  it("should return an object with the expected properties", async () => {
    const { result } = renderHook(() => useGifGaleryPage());

    await waitFor(() => {
      expect(result.current.gifs).toEqual([]);
    });

    expect(result.current).toHaveProperty("url");
    expect(result.current).toHaveProperty("handleSearchInput");
    expect(result.current).toHaveProperty("addGif");
    expect(result.current).toHaveProperty("error");
    expect(result.current).toHaveProperty("gifs");
    expect(result.current).toHaveProperty("deleteGif");
  });

  describe("getGifs", () => {
    it("should return gifs from GifService.getGifsByAuthorId", async () => {
      mockedGifService.getGifsByAuthorId.mockResolvedValue(mockedGifs);
      const { result } = renderHook(() => useGifGaleryPage());

      await waitFor(() => {
        expect(result.current.gifs).toEqual(mockedGifs);
      });
    });

    it("should setError when GifService.getGifsByAuthorId throws an error", async () => {
      mockedGifService.getGifsByAuthorId.mockRejectedValue(new Error());
      const { result } = renderHook(() => useGifGaleryPage());

      await waitFor(() => {
        expect(result.current.error).toEqual("Error al obtener gifs");
      });
    });
  });

  it("should setUrl and setError to empty when handleSearchInput is called", () => {
    const { result } = renderHook(() => useGifGaleryPage());

    act(() => {
      result.current.handleSearchInput("test");
    });

    expect(result.current.url).toEqual("test");
    expect(result.current.error).toEqual("");
  });

  describe("addGif", () => {
    it("should call GifService.postNewGif with the url and add a gif to the gifs array", async () => {
      mockedGifService.postNewGif.mockResolvedValue(mockedGifs[0]);
      const { result } = renderHook(() => useGifGaleryPage());

      act(() => {
        result.current.handleSearchInput("test");
      });

      await act(async () => {
        await result.current.addGif();
      });

      expect(GifService.postNewGif).toHaveBeenCalledWith("test");
      expect(result.current.gifs).toEqual([mockedGifs[0]]);
    });

    it("should setError when GifService.postNewGif throws an error", async () => {
      mockedGifService.postNewGif.mockRejectedValue(new Error());
      const { result } = renderHook(() => useGifGaleryPage());

      await act(async () => {
        await result.current.addGif();
      });

      expect(result.current.error).toEqual("Error al agregar gif");
    });
  });

  describe("deleteGif", () => {
    it("should call GifService.deleteGif with the gifId and remove the gif from the gifs array", async () => {
      mockedGifService.getGifsByAuthorId.mockResolvedValue(mockedGifs);
      const { result } = renderHook(() => useGifGaleryPage());

      await waitFor(() => {
        expect(result.current.gifs).toEqual(mockedGifs);
      });

      await act(async () => {
        await result.current.deleteGif(mockedGifs[0].id, mockedGifs[0].url);
      });

      expect(GifService.deleteGif).toHaveBeenCalledWith(
        mockedGifs[0].id,
        mockedGifs[0].url
      );
      expect(result.current.gifs).toEqual([mockedGifs[1]]);
    });

    it("should setError when GifService.deleteGif throws an error", async () => {
      mockedGifService.getGifsByAuthorId.mockResolvedValue(mockedGifs);
      const { result } = renderHook(() => useGifGaleryPage());

      await waitFor(() => {
        expect(result.current.gifs).toEqual(mockedGifs);
      });

      mockedGifService.deleteGif.mockRejectedValue(new Error());

      await act(async () => {
        await result.current.deleteGif(mockedGifs[0].id, mockedGifs[0].url);
      });

      expect(result.current.error).toEqual("Error al eliminar gif");
    });
  });
});

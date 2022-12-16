import { renderHook, act } from "@testing-library/react";
import { GifsProvider } from "../../../../../context/gifs-context/gifs-context";
import useGifsList from "./use-gifs-list";

describe("useGifsList hook", () => {
  it("should execute getGifs function", () => {
    const mockGetGifs = jest.fn();
    renderHook(() => useGifsList(), {
      wrapper: ({ children }) => (
        <GifsProvider
          initialValue={{
            getGifs: mockGetGifs,
          }}
        >
          {children}
        </GifsProvider>
      ),
    });
    expect(mockGetGifs).toBeCalledTimes(1);
  });
});

import { act, renderHook } from "@testing-library/react";
import useCard from "./use-card";

describe("useCard tests", () => {
  it("should isVisibleRemovePanel set to true when handleOnClick is executed", async () => {
    const { result } = renderHook(() =>
      useCard({
        gif: { id: 1, url: "URL" },
        onDeleteGif: () => {},
      })
    );

    expect(result.current.isVisibleRemovePanel).toBeFalsy();

    await act(() => {
      result.current.handleOnClick();
    });

    expect(result.current.isVisibleRemovePanel).toBeTruthy();
  });

  it("should call onDeleteGif with the gif when handleDelete is executed", async () => {
    const gif = { id: 1, url: "URL" };
    const mockDelete = jest.fn();

    const { result } = renderHook(() =>
      useCard({
        gif,
        onDeleteGif: mockDelete,
      })
    );

    await act(() => {
      result.current.handleDelete();
    });

    expect(mockDelete).toBeCalledWith(gif);
    expect(result.current.isVisibleRemovePanel).toBeFalsy();
  });
});

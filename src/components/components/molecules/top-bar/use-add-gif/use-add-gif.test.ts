import { renderHook, act } from "@testing-library/react";
import useAddGif from "./use-add-gif";

describe("useAddGif hook", () => {
  it("should set new url value", () => {
    const { result } = renderHook(() => useAddGif());
    act(() => {
      result.current.handleAddUrl("test");
    });
    expect(result.current.url).toBe("test");
  });
});

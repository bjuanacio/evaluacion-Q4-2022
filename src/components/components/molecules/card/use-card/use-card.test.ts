import { renderHook, act } from "@testing-library/react";
import useCard from "./use-card";

describe("useCard hook", () => {
  it("should showOverlay to be true when handleChangeOverlay function is executed", () => {
    const { result } = renderHook(() => useCard());
    act(() => {
      result.current.handleChangeShowOverlay();
    });
    expect(result.current.showOverlay).toBeTruthy();
  });

  it("should showOverlay to be false when handleChangeOverlay function is executed and showOverlay is true", () => {
    const { result } = renderHook(() => useCard());
    act(() => {
      result.current.handleChangeShowOverlay();
    });
    act(() => {
      result.current.handleChangeShowOverlay();
    });
    expect(result.current.showOverlay).toBeFalsy();
  });
});

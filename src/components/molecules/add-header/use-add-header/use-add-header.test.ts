import { renderHook, act } from "@testing-library/react";
import useAddHeader from "./use-add-header";

describe("Use add header Test", () => {
  const mockHandleCreate = jest.fn();

  it("should have the default value at current value", () => {
    const { result } = renderHook(() =>
      useAddHeader({
        handleCreate: mockHandleCreate,
        defaultValue: "testValue",
      })
    );
    expect(result.current.currentValue).toHaveLength(9);
  });

  it("should have the value at current value", () => {
    const { result } = renderHook(() =>
      useAddHeader({ handleCreate: mockHandleCreate, value: "testValue" })
    );
    expect(result.current.currentValue).toHaveLength(9);
  });

  it("should have the default value at current value", () => {
    const { result } = renderHook(() =>
      useAddHeader({
        handleCreate: mockHandleCreate,
      })
    );

    act(() => {
      result.current.handleCurrentValue("testValue");
    });

    expect(result.current.currentValue).toHaveLength(9);
  });

  it("handle create action", () => {
    const { result } = renderHook(() =>
      useAddHeader({
        handleCreate: mockHandleCreate,
      })
    );

    act(() => {
      result.current.handleCreateButton();
    });
 
    expect(mockHandleCreate).toHaveBeenCalled();
  });
});

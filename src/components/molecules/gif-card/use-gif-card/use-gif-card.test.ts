import { renderHook, act } from "@testing-library/react";
import useGifCard from "./use-gif-card";

describe("use gif card test", () => {
  const gifTest = {
    id: 2,
    url: "example.com",
    author_id: 1,
  };

  const mockDelete = jest.fn();

  it("returns false show delete message", () => {
    const { result } = renderHook(() =>
      useGifCard({ gif: gifTest, handleDelete: mockDelete })
    );

    expect(result.current.showDeleteMessage).toBe(false);
  });

  it("returns true show delete message", () => {
    const { result } = renderHook(() =>
      useGifCard({ gif: gifTest, handleDelete: mockDelete })
    );

    act(() => {
      result.current.handleDeleteIcon();
    });

    expect(result.current.showDeleteMessage).toBe(true);
  });

  it("calls the handleDelete callback", () => {
    const { result } = renderHook(() =>
      useGifCard({ gif: gifTest, handleDelete: mockDelete })
    );

    act(() => {
      result.current.handleDelete();
    });

    expect(mockDelete).toBeCalled();
  });

  it("should cancel the action", () => {
    const { result } = renderHook(() =>
      useGifCard({ gif: gifTest, handleDelete: mockDelete })
    );

    act(() => {
      result.current.handleDeleteIcon();
      result.current.handleCancel();
    });

    expect(result.current.showDeleteMessage).toBe(false);
  });
});

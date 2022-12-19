import { render, renderHook, screen } from "@testing-library/react";
import { useForm } from "./use-form";

describe("use-form", () => {
  it("should render hook", async () => {
    
    const { result } = renderHook(() => useForm());
    expect(result.current).toBeTruthy();
  });
});

import { render, renderHook, screen } from "@testing-library/react";
import { useForm } from "./use-form";

describe("use-form", () => {
  it("should render hook", async () => {
    const initialForm= { name: "test", email: "test@test" }
    const { result } = renderHook(() => useForm(initialForm));
    const { formState, onInputChange, onResetForm } = result.current;
    expect(formState).toEqual({ name: "test", email: "test@test" });
    expect(onInputChange).toBeInstanceOf(Function);
    expect(onResetForm).toBeInstanceOf(Function);
  });
});

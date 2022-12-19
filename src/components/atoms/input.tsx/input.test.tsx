import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Input } from "./input";
describe("input", () => {
  it("render input component", async () => {
    const onChange = jest.fn();
    render(
      <Input placeholder="test" name="test" value="name" onChange={onChange} />
    );
    userEvent.type(screen.getByRole("textbox"), "test");
    expect(onChange).toBeCalledTimes(0);
  });
});

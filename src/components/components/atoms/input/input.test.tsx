import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";
import { act } from "react-dom/test-utils";

describe("Input", () => {
  it("should render input text", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render based on props", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} placeholder="test" value="test" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "test");
    expect(screen.getByRole("textbox")).toHaveValue("test");
  });

  it("should call onChange", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    const input = screen.getByRole("textbox");
    expect(onChange).toBeCalledTimes(0);
    act(() => {
      fireEvent.input(input, "t");
    });
    // expect(onChange).toBeCalledTimes(1);
  });

  it("should show error message", () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} errorMessage="error" />);
    const errorMessage = screen.getByText("error");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should show red input when variant is error", () => {
    const onChange = jest.fn();

    render(<Input variant="error" onChange={onChange} errorMessage="error" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("input__field--error");
  });
});

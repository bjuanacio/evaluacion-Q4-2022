import { render, screen } from "@testing-library/react";
import { Input } from "./input";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  const onChange = jest.fn();
  it("should render input text", () => {
    render(<Input onChange={onChange} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render with placeholder", () => {
    render(<Input onChange={onChange} placeholder="test" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "test");
  });

  it("should show error message", () => {
    render(<Input onChange={onChange} errorMessage="error" />);
    const errorMessage = screen.getByText("error");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should show red input when variant is error", () => {
    render(<Input onChange={onChange} variant="error" errorMessage="error" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("input__field--error");
  });

  it("should call onChange", async () => {
    render(<Input onChange={onChange} />);
    const input = screen.getByRole("textbox");

    expect(onChange).toBeCalledTimes(0);

    await userEvent.type(input, "test");

    expect(onChange).toBeCalledTimes(4);
  });
});

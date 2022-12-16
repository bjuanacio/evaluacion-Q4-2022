import { render, screen } from "@testing-library/react";
import { Input } from "./input";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  const onChange = jest.fn();
  it("should render input text", () => {
    render(<Input onChange={onChange} />);
    expect(screen.getByRole("textbox")).toBeVisible();
  });

  it("should render by props", () => {
    render(<Input onChange={onChange} placeholder="test" value="test" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "test");
    expect(screen.getByRole("textbox")).toHaveValue("test");
  });

  it("should eject onChange function", async () => {
    render(<Input onChange={onChange} />);
    const input = screen.getByRole("textbox");
    expect(onChange).toHaveBeenCalledTimes(0);
    await userEvent.type(input, "test");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("should show error message", () => {
    render(<Input onChange={onChange} errorMessage="error" />);
    const errorMessage = screen.getByText("error");
    expect(errorMessage).toBeVisible();
  });

  it("should show red input border when variant is error", () => {
    render(<Input variant="error" onChange={onChange} errorMessage="error" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("input__field--error");
  });
});

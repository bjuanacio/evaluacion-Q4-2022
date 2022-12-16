import { render, screen } from "@testing-library/react";
import { Input } from "./input";
import userEvent from "@testing-library/user-event";

describe("Input", () => {
  const onChange = jest.fn();
  it("should render input text", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render based on props", () => {
    render(<Input placeholder="test" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "test");
    expect(screen.getByRole("textbox")).toHaveValue("test");
  });

  it("should show error message", () => {
    render(<Input errorMessage="error" />);
    const errorMessage = screen.getByText("error");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should show red input when variant is error", () => {
    render(<Input variant="error" errorMessage="error" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("input__field--error");
  });
});

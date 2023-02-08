import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./input";

describe("Input test", () => {
  it("should render Input", () => {
    render(<Input />);

    const input = screen.getByPlaceholderText("Text");

    expect(input).toBeInTheDocument();
  });

  it("should render Input with custom placeholder", () => {
    render(<Input placeHolder="Esto es un placeholder" />);

    const input = screen.getByPlaceholderText("Esto es un placeholder");

    expect(input).toBeInTheDocument();
  });

  it("should render Input error when messageError is defined", () => {
    render(<Input messageError="Esto es un error" />);

    const messageError = screen.getByText("Esto es un error");
    expect(messageError).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Text");
    expect(input).toHaveClass("input__element--error");
  });

  it("should render Input error when messageError is defined", () => {
    render(<Input value="Esto es un valor" />);

    const input = screen.getByDisplayValue("Esto es un valor");
    expect(input).toBeInTheDocument();
  });

  it("should excute onChange", async () => {
    const mockOnChage = jest.fn();

    render(<Input onChange={mockOnChage} />);

    const input = screen.getByPlaceholderText("Text");

    await userEvent.type(input, "hola a todos");

    expect(mockOnChage).toBeCalledWith("hola a todos");
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddInput from "./add-input";

describe("AddInput tests", () => {
  it("should render AddInput", () => {
    render(<AddInput onAdd={() => {}} />);

    const button = screen.getByText("Agregar");

    expect(button).toBeInTheDocument();
  });

  it("should render one input and one button", () => {
    render(<AddInput onAdd={() => {}} placeHolder="Este es un placeholder" />);

    const button = screen.getByText("Agregar");
    expect(button).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Este es un placeholder");
    expect(input).toBeInTheDocument();
  });

  it("should execute onChangeText and execute onAdd", async () => {
    const mockOnAdd = jest.fn();

    render(
      <AddInput onAdd={mockOnAdd} placeHolder="Este es un placeholder" />
    );

    const input = screen.getByPlaceholderText("Este es un placeholder");
    await userEvent.type(input, "Esto es un valor");

    const button = screen.getByText("Agregar");
    await userEvent.click(button);

    expect(mockOnAdd).toBeCalledWith("Esto es un valor");

  });
});

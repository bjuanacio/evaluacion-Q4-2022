import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./button";

describe("Button test", () => {
  it("Should render the button", () => {
    render(<Button onClick={() => {}}>Aceptar</Button>);

    const button = screen.getByRole("button", {
      name: "Aceptar",
    });

    expect(button).toBeInTheDocument();
  });

  it("Should render the button with the class button--circle", () => {
    render(
      <Button isCircle onClick={() => {}}>
        Aceptar
      </Button>
    );

    const button = screen.getByRole("button", {
      name: "Aceptar",
    });

    expect(button).toHaveClass("button--circle");
  });

  it("Should render the button with the class button--secondary", () => {
    render(
      <Button type="secondary" onClick={() => {}}>
        Aceptar
      </Button>
    );
    const button = screen.getByRole("button", {
      name: "Aceptar",
    });

    expect(button).toHaveClass("button--secondary");
  });

  it("Should execute onClick when the button is clicked", async () => {
    const mockOnClik = jest.fn();

    render(
      <Button type="secondary" onClick={mockOnClik}>
        Aceptar
      </Button>
    );
    const button = screen.getByRole("button", {
      name: "Aceptar",
    });

    await userEvent.click(button);

    expect(mockOnClik).toBeCalled();
  });
});

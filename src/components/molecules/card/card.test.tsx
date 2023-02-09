import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./card";

describe("Cards tests", () => {
  const gifExample = {
    id: 2,
    url: "https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif",
  };

  it("should render Card", () => {
    render(<Card gif={gifExample} onDeleteGif={() => {}} />);

    const img = screen.getByAltText("gif");
    const button = screen.getByRole("button");

    expect(img).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should render remove message when clicked the remove button", async () => {
    render(<Card gif={gifExample} onDeleteGif={() => {}} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    const removeText = screen.getByText("¿Deseas eliminar este GIF?");

    expect(removeText).toBeInTheDocument();
  });

  it("should not render remove message when clicked the cancel button", async () => {
    render(<Card gif={gifExample} onDeleteGif={() => {}} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    const buttonCancel = screen.getByRole("button", {
      name: "Cancelar",
    });

    await userEvent.click(buttonCancel);

    const removeText = screen.queryByText("¿Deseas eliminar este GIF?");

    expect(removeText).not.toBeInTheDocument();
  });

  it("should execute onDeleteGif when clicked the remove button", async () => {
    const mockOnDeleteGif = jest.fn();

    render(<Card gif={gifExample} onDeleteGif={mockOnDeleteGif} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    const buttonRemove = screen.getByRole("button", {
      name: "Eliminar",
    });

    await userEvent.click(buttonRemove);

    expect(mockOnDeleteGif).toBeCalledWith(gifExample);
  });
});

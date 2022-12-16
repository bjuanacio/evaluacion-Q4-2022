import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GifCard from "./gif-card";

describe("Gif card test", () => {
  const gifTest = {
    id: 1,
    url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
    author_id: 11,
  };

  const deleteMock = jest.fn();

  it("displays the gif", () => {
    render(<GifCard gif={gifTest} handleDelete={deleteMock} />);
    const image = screen.getByAltText(/media.tenor.com/i);
    expect(image).toBeInTheDocument();
  });

  it("displays the delete button", () => {
    render(<GifCard gif={gifTest} handleDelete={deleteMock} />);
    const button = screen.getByAltText(/delete-icon/i);
    expect(button).toBeInTheDocument();
  });

  it("displays the delete cover actions", async () => {
    render(<GifCard gif={gifTest} handleDelete={deleteMock} />);
    const iconButton = screen.getByAltText(/delete-icon/i);
    await userEvent.click(iconButton);
    const deleteText = screen.getByText(/¿Deseas eliminar este GIF?/i);
    const deleteButton = screen.getByText("Eliminar");
    const cancelButton = screen.getByText(/Cancelar/i);
    expect(deleteText).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("handle delete action", async () => {
    render(<GifCard gif={gifTest} handleDelete={deleteMock} />);
    const iconButton = screen.getByAltText(/delete-icon/i);
    await userEvent.click(iconButton);
    const deleteButton = screen.getByText("Eliminar");
    await userEvent.click(deleteButton);
    expect(deleteMock).toHaveBeenCalled(); 
  });
});

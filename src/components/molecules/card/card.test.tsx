import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Gif } from "../../../utils/interfaces/gif";
import Card from "./card";

describe("Card", () => {
  const imageUrl =
    "https://phantom-marca.unidadeditorial.es/500be06c4056e00a9f691d6c5800f216/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/30/16644896975046.jpg";
  const gif: Gif = {
    id: 1,
    url: "https://media.tenor.com/cyJxAa-H22sAAAAM/iron-man-avengers.gif",
    author_id: 22,
  };

  const deleteMock = jest.fn();
  const setActivePlayerMock = jest.fn();

  it("should display the image player", () => {
    render(<Card gif={gif} deleteGif={deleteMock} />);
    const image = screen.getByAltText("1");
    expect(image).toBeVisible();
  });

  it("should display two buttons", () => {
    render(<Card gif={gif} deleteGif={deleteMock} />);
    const buttons = screen.getByRole("img", { name: "delete-icon" });
    expect(buttons).toBeVisible();
  });

  it("should execute delete action", async () => {
    render(<Card gif={gif} deleteGif={deleteMock} />);
    const displayButton = screen.getByRole("img", { name: "delete-icon" });
    await userEvent.click(displayButton);
    expect(screen.getByText("Deseas Eliminar este GIF")).toBeVisible();
    await userEvent.click(screen.getByRole("button", { name: "Eliminar" }));
    expect(deleteMock.mock.calls).toHaveLength(1);
  });

  it("should close display Deseas Eliminar GIF", async () => {
    render(<Card gif={gif} deleteGif={deleteMock} />);
    const displayButton = screen.getByRole("img", { name: "delete-icon" });
    await userEvent.click(displayButton);
    expect(screen.getByText("Deseas Eliminar este GIF")).toBeVisible();
    await userEvent.click(screen.getByRole("button", { name: "Cancelar" }));
    expect(screen.queryByText("Deseas Eliminar este GIF")).toBeNull();
  });
});

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./app";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Gif } from "./utils/interfaces/gif.interface";

const axiosMock = new MockAdapter(axios);

describe("App component", () => {
  it("Should render the title", () => {
    render(<App />);
    const title = screen.getByText("Gif Galery");
    expect(title).toBeVisible();
  });
  it("should add a new gif to the list", async () => {
    axiosMock.onGet().reply(200, [
      {
        id: 86,
        url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
        author_id: 8,
      },
    ] as Gif[]);

    render(<App />);
    const gifInput = screen.getByPlaceholderText("Gift URL");
    const gifButton = screen.getByText("Agregar");
    expect(gifInput).toBeDefined();
    expect(gifButton).toBeDefined();
    expect(gifButton).toBeVisible();
    expect(gifInput).toHaveTextContent("");

    fireEvent.change(gifInput, {
      target: {
        value: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
      },
    });
    expect(gifInput).toHaveValue(
      "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif"
    );
    fireEvent.click(gifButton);

    await waitFor(() => {
      screen.queryByAltText(
        "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif"
      );
    });
  });
  it("should add a delete gif to the list", async () => {
    axiosMock.onGet("/").reply(200, [
      {
        id: 329,
        url: "https://media.tenor.com/WxflQIGfOYkAAAAj/spider-man-no-way-home-marvel-studios.gif",
        author_id: 8,
      },
      {
        id: 332,
        url: "https://media.tenor.com/d2ETG1NuMIIAAAAM/degage-punch.gif",
        author_id: 8,
      },
    ] as Gif[]);

    render(<App />);
    const gifInput = screen.getByPlaceholderText("Gift URL");
    const gifButton = screen.getByText("Agregar");
    const gifCard = screen.queryByAltText(
      "https://media.tenor.com/d2ETG1NuMIIAAAAM/degage-punch.gif"
    );
    const deleteIcon = screen.getByAltText("Delete icon");

    expect(gifInput).toBeVisible();
    expect(gifButton).toBeVisible();
    expect(deleteIcon).toBeVisible();
    expect(gifCard).toBeInTheDocument();

    fireEvent.click(deleteIcon);
    const deleteButton = screen.getByText("Eliminar");
    expect(deleteButton).toBeVisible();

    fireEvent.click(deleteButton);
    expect(gifCard).not.toBeInTheDocument();
  });
});

import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Galery from "./galery";
import * as Services from "../../../services/gif/gif-services";

describe("Galery tests", () => {
  const mockCards = [
    {
      id: 1,
      url: "uno",
    },
    {
      id: 2,
      url: "dos",
    },
  ];

  it("should render Galery with empty message", async () => {
    jest.spyOn(Services, "getGifs").mockResolvedValue([]);

    render(<Galery />);

    const title = await screen.findByText("Gif Galery");
    expect(title).toBeInTheDocument();

    const addInput = await screen.findByRole("button", {
      name: "Agregar",
    });
    expect(addInput).toBeInTheDocument();

    const emptyMessage = await screen.findByText("No posee gifs");
    expect(emptyMessage).toBeInTheDocument();
  });

  it("should render a card list", async () => {
    const mockAxiosGet = jest
      .spyOn(Services, "getGifs")
      .mockResolvedValue(mockCards);

    render(<Galery />);

    expect(mockAxiosGet).toBeCalled();

    const cards = await screen.findAllByAltText("gif");
    expect(cards).toHaveLength(2);
  });

  it("should add a new gif", async () => {
    const url = "url_of_new_gif";

    jest.spyOn(Services, "getGifs").mockResolvedValue([]);
    const mockAddService = jest.spyOn(Services, "addGif").mockResolvedValue({
      url,
      id: 1,
    });

    render(<Galery />);

    const input = screen.getByPlaceholderText("Gift URL");
    expect(input).toBeInTheDocument();

    await userEvent.type(input, url);

    const buttonAdd = screen.getByRole("button", {
      name: "Agregar",
    });
    expect(buttonAdd).toBeInTheDocument();

    await userEvent.click(buttonAdd);

    expect(mockAddService).toBeCalledWith(url);

    const image = await screen.findByAltText("gif");
    expect(image).toHaveAttribute("src", url);
  });
});

import { act, render, screen, waitFor } from "@testing-library/react";
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

  it("should render Galery", () => {
    jest.spyOn(Services, "getGifs");

    render(<Galery />);

    const title = screen.getByText("Gif Galery");
    expect(title).toBeInTheDocument();

    const addInput = screen.getByRole("button", {
      name: "Agregar",
    });
    expect(addInput).toBeInTheDocument();

    const emptyMessage = screen.getByText("No posee gifs");
    expect(emptyMessage).toBeInTheDocument();
  });

  it("should render a card list", async () => {
    const mockAxiosGet = jest
      .spyOn(Services, "getGifs")
      .mockResolvedValue(mockCards);

    render(<Galery />);

    await waitFor(async () => {
      await act(async () => {});
    });

    expect(mockAxiosGet).toBeCalled();

    const cards = screen.getAllByAltText("gif");
    expect(cards).toHaveLength(2);
  });

  it("should render a card list", async () => {
    const mockAxiosGet = jest
      .spyOn(Services, "getGifs")
      .mockResolvedValue(mockCards);

    render(<Galery />);

    await waitFor(async () => {
      await act(async () => {});
    });

    expect(mockAxiosGet).toBeCalled();

    const cards = screen.getAllByAltText("gif");
    expect(cards).toHaveLength(2);
  });
});

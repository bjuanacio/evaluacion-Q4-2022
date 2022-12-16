import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockedGifs } from "../../../utils/constants/gifs";
import GifCard from "./gif-card";

describe("GifCard tests", () => {
  const onDelete = jest.fn();
  it("should render gif card", () => {
    render(<GifCard gif={mockedGifs[0]} onDelete={onDelete} />);
    expect(screen.getAllByRole("img")[0]).toBeVisible();
    expect(screen.getByRole("button")).toBeVisible();
  });

  it("should show delete buttons when click on delete button", async () => {
    render(<GifCard gif={mockedGifs[0]} onDelete={onDelete} />);
    const deleteButton = screen.getByRole("button");
    await userEvent.click(deleteButton);
    expect(screen.getByText("¿Deseas eliminar este GIF?")).toBeVisible();
  });

  it("should call onDelete when click on Confirm delete button", async () => {
    render(<GifCard gif={mockedGifs[0]} onDelete={onDelete} />);
    const deleteButton = screen.getByRole("button");
    await userEvent.click(deleteButton);

    const confirmDeleteButton = screen.getByRole("button", {
      name: "Eliminar",
    });
    await userEvent.click(confirmDeleteButton);

    expect(onDelete).toBeCalledTimes(1);
    expect(onDelete).toBeCalledWith(mockedGifs[0].id, mockedGifs[0].url);
  });
});

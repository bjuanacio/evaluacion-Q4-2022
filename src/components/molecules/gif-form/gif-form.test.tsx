import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DEFAULT_IMAGE } from "../../../utils/constants/gif";
import GifForm from "./gif-form";

describe("Gif Form Test", () => {
  const onSubmitMock = jest.fn();

  it("should render 1 input", () => {
    render(<GifForm onSubmit={onSubmitMock} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(1);
  });

  it("should display 1 label when input field is empty ", () => {
    const { container } = render(<GifForm onSubmit={onSubmitMock} />);
    const errors = container.getElementsByClassName("input__error-message");
    expect(errors).toHaveLength(1);
  });

  it("should display default image when url input is empty", () => {
    render(<GifForm onSubmit={onSubmitMock} />);
    const img: HTMLImageElement = screen.getByRole("img");
    expect(img.src).toBe(DEFAULT_IMAGE);
  });

  it("shouldn`t display default image when url input is fully", async () => {
    render(<GifForm onSubmit={onSubmitMock} />);
    const img: HTMLImageElement = screen.getByRole("img");
    const imgInput = screen.getByPlaceholderText("Url");
    await userEvent.type(imgInput, "test");
    expect(img.src).not.toBe(DEFAULT_IMAGE);
  });
});

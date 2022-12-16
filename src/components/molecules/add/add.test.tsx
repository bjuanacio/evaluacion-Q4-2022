import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Add from "./add";

describe("Test Add", () => {
  const handleChangeModalMock = jest.fn();

  it("Shuld render button", () => {
    render(<Add handleChangeModal={handleChangeModalMock} />);
    const newButton = screen.getByRole("button", { name: "Nuevo" });
    expect(newButton).toBeVisible();
  });

  it("Shuld click button eject openModal function", async () => {
    render(<Add handleChangeModal={handleChangeModalMock} />);
    const newButton = screen.getByRole("button", { name: "Nuevo" });
    await userEvent.click(newButton);
    expect(handleChangeModalMock).toHaveBeenCalledTimes(1);
  });
});

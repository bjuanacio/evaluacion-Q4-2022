import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import AddGifInput from "./add-gif-input";

describe("addGifInput Component", () => {
  test("should show error message when the user click in add and the input is empty", async () => {
    render(
      <Provider store={store}>
        <AddGifInput />
      </Provider>
    );
    const addBtn = screen.getByRole("button", { name: "Agregar" });
    userEvent.click(addBtn);
    const errorMessage = await screen.findByText("Ingresa una URL");
    expect(errorMessage).toBeVisible();
  });
});

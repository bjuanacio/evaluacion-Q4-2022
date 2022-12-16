import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import GifCard from "./gif-card";

describe("gifCard Component", () => {
  test("should show the options on lcik in delet icon ", async () => {
    render(
      <Provider store={store}>
        <GifCard
          url="https://media.tenor.com/gay-d9_H0RkAAAAC/laughing-lol.gif"
          id={25}
        />
      </Provider>
    );
    const deleteIcon = screen.getByAltText("Delete icon");
    userEvent.click(deleteIcon);
    const question = await screen.findByText("¿Deseas eliminar este GIF?");
    expect(question).toBeVisible();
  });
});

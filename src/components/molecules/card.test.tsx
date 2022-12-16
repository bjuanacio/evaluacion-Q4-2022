import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Card from "./card/card";
import reducer from "../../store/reducers/gifs";
import { mockedAxios } from "../../setupTests";

describe("card", () => {
  test("should show the image", async () => {
    mockedAxios.delete.mockResolvedValue({});
    const store = configureStore({
      reducer,
    });
    render(
      <Provider store={store}>
        <Card
          gif={{
            author_id: 6,
            id: 100,
            url: "https://media.tenor.com/SE6qhu-xHYcAAAAM/good-morning.gif",
          }}
        ></Card>
      </Provider>
    );
    await userEvent.click(screen.getByTestId("delete"));
    expect(screen.getByText("Eliminar")).toBeVisible();
    await userEvent.click(screen.getByText("Eliminar"));
    expect(mockedAxios.delete).toBeCalledTimes(1)
  });
  test('should close the settings', async () => {
    const store = configureStore({
      reducer,
    });
    render(
      <Provider store={store}>
        <Card
          gif={{
            author_id: 6,
            id: 100,
            url: "https://media.tenor.com/SE6qhu-xHYcAAAAM/good-morning.gif",
          }}
        ></Card>
      </Provider>
    );
    await userEvent.click(screen.getByTestId("delete"));
    await userEvent.click(screen.getByText("Cancelar"));
    expect(screen.queryByText("Eliminar")).toBeNull()
  })
});

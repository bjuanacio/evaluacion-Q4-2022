import { configureStore } from "@reduxjs/toolkit";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import App from "./app";
import { mockedAxios } from "./setupTests";
import reducer from "./store/reducers/gifs";

describe("App component", () => {
  const store = configureStore({
    reducer,
  });
  test("Should create gifs", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] });
    mockedAxios.post.mockResolvedValue({});
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await userEvent.type(
      screen.getByPlaceholderText("Gift URL"),
      "https://media.tenor.com/SE6qhu-xHYcAAAAC/good-morning.gif"
    );
    mockedAxios.get.mockResolvedValue({
      data: [
        {
          url: "https://media.tenor.com/SE6qhu-xHYcAAAAC/good-morning.gif",
          author_id: 6,
          id: 100,
        },
      ],
    });
    await userEvent.click(screen.getByText("Agregar"));
    expect(mockedAxios.post).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledTimes(2);
    expect(
      screen.getByAltText(
        "https://media.tenor.com/SE6qhu-xHYcAAAAC/good-morning.gif"
      )
    ).toBeVisible();
  });
  test("should show a message if something went wrong adding an image", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] });
    mockedAxios.post.mockResolvedValue({});
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await userEvent.type(
      screen.getByPlaceholderText("Gift URL"),
      "https://media.tenor.com/SE6qhu-xHYcAAAAC/good-morning.gif"
    );
    mockedAxios.get.mockRejectedValue({});
    await userEvent.click(screen.getByText("Agregar"));
    expect(mockedAxios.post).toBeCalledTimes(1);
    expect(mockedAxios.get).toBeCalledTimes(2);
    expect(screen.getByAltText("Warning")).toBeVisible();
    expect(screen.getByText("Something went wrong")).toBeVisible();
  });
  test("should show a message if something went wrong deleting an image", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          url: "https://media.tenor.com/SE6qhu-xHYcAAAAC/good-morning.gif",
          author_id: 6,
          id: 100,
        },
      ],
    });
    mockedAxios.delete.mockRejectedValue({});
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      screen.getByTestId("delete");
    });
    await userEvent.click(screen.getByTestId("delete"));
    await userEvent.click(screen.getByText("Eliminar"));
    expect(mockedAxios.delete).toBeCalledTimes(1);
    expect(screen.getByAltText("Warning")).toBeVisible();
    expect(screen.getByText("Something went wrong")).toBeVisible();
  });
  test("should show a message if something went wrong getting an image", async () => {
    mockedAxios.get.mockRejectedValue({});
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(mockedAxios.get).toBeCalledTimes(1);
    await waitFor(() => {
      screen.getByAltText("Warning");
    });
    expect(screen.getByAltText("Warning")).toBeVisible();
    expect(screen.getByText("Something went wrong")).toBeVisible();
  });
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import { AxiosResponse } from "axios";
import { Provider } from "react-redux";
import * as service from "../../../services/gif-service/gif-service";
import { store } from "../../../store/store";
import { GalleryPage } from "./gallery-page";
import * as actions from "../../../store/actions/actions";

describe("GalleryPage", () => {
  const WrappedComponent = () => {
    return (
      <Provider store={store}>
        <GalleryPage />
      </Provider>
    );
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("should render Loading Gallery page", () => {
    render(<WrappedComponent />);

    const title = screen.queryByText("Loading", { exact: false });
    expect(title).not.toBeNull();
  });

  it("should render empty Gallery page", async () => {
    jest
      .spyOn(service, "getGifs")
      .mockResolvedValue({ data: [] } as AxiosResponse);

    await render(<WrappedComponent />);

    await act(() => {
      jest.runAllTimers();
    });

    const title = screen.queryByText("No posee gifs");

    expect(title).not.toBeNull();
  });

  it("should render Gallery page with gifs", async () => {
    jest.spyOn(service, "getGifs").mockResolvedValue({
      data: [{ id: 1, url: "http:...", author_id: 17 }],
    } as AxiosResponse);

    await render(<WrappedComponent />);

    await act(() => {
      jest.runAllTimers();
    });

    const items = screen.queryAllByAltText("http:...");

    expect(items.length).toBe(1);
  });

  it("should not call addGif action if form is not valid", async () => {
    jest.spyOn(service, "getGifs").mockResolvedValue({
      data: [],
    } as AxiosResponse);
    const addGifAction = jest.spyOn(actions, "startAddingGif");

    await render(<WrappedComponent />);
    await act(() => {
      jest.runAllTimers();
    });

    const input = screen.queryByPlaceholderText("GIF URL");
    expect(input).not.toBeNull();

    const addBtn = screen.queryByText("Agregar");
    expect(addBtn).not.toBeNull();

    fireEvent.click(addBtn!);
    expect(addGifAction).not.toHaveBeenCalled();
  });

  //   it("should call addGif action if form is valid", async () => {
  //     jest.spyOn(service, "getGifs").mockResolvedValue({
  //       data: [],
  //     } as AxiosResponse);
  //     const addGifAction = jest.spyOn(actions, "startAddingGif");

  //     const { debug } = await render(<WrappedComponent />);
  //     await act(() => {
  //       jest.runAllTimers();
  //     });

  //     const input = screen.queryByPlaceholderText("GIF URL");
  //     expect(input).not.toBeNull();
  //     fireEvent.change(input!, { target: { value: "http://wwww.google.com" } });

  //     await act(() => {
  //       jest.runAllTimers();
  //     });

  //     const addBtn = screen.queryByText("Agregar");
  //     expect(addBtn).not.toBeNull();

  //     fireEvent.click(addBtn!);
  //     expect(addGifAction).toHaveBeenCalled();
  //   });
});

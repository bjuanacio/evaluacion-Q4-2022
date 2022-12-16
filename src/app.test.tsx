import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./app";
import { store } from "./store/store";

describe("App component", () => {
  it("Should render the title", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const title = screen.getByText("Gif Galery");
    expect(title).toBeInTheDocument();
  });
});

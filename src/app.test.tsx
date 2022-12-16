import { render, screen } from "@testing-library/react";
import App from "./app";

describe("App component", () => {
  it("Should render the title", () => {
    render(<App />);

    const title = screen.getByText("Gif Galery");
    expect(title).toBeInTheDocument();
  });

});

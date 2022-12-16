import { render, screen } from "@testing-library/react";
import App from "./app";

describe("App component", () => {
  it("Should render GIFs section", () => {
    render(<App />);

    const title = screen.getByText("Gift Galery");
    expect(title).toBeInTheDocument();

  });
});

import { render, screen } from "@testing-library/react";
import App from "./app";

describe("App component", () => {
  it("should render GifGaleryPage", () => {
    render(<App />);
    expect(screen.getByTestId("gifgalerypage-testid")).toBeVisible();
  });
});

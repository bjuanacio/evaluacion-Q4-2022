import { render, screen } from "@testing-library/react";
import App from "./app";
import { Info } from "./utils/enums/info";

describe("App component", () => {
  it("should render a title", () => {
    render(<App />);
    const title = screen.getByText(Info.TITLE);
    expect(title).toBeInTheDocument();
  });
});

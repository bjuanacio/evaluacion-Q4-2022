import { render } from "@testing-library/react";
import App from "./app";

describe("App component", () => {
  it("Should render the title", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});

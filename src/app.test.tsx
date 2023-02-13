import { render, screen } from "@testing-library/react";
import * as Services from "./services/gif/gif-services";
import App from "./app";

describe("App component", () => {
  it("Should render the title", async () => {
    jest.spyOn(Services, "getGifs").mockResolvedValue([]);

    render(<App />);

    const title = await screen.findByText("Gif Galery");
    expect(title).toBeInTheDocument();
  });
});

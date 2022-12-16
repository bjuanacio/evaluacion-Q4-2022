import { render, screen } from "@testing-library/react";
import { GifsProvider } from "../../../context/gifs-context/gifs-context";
import { Gallery } from "./gallery";

describe("TopBar", () => {
  it("should render successfully", () => {
    render(
      <GifsProvider initialValue={{gifsList:[
        {
          id: 1,
          author_id: 15,
          url: "https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif",
        },
      ]}}>
        <Gallery />
      </GifsProvider>
    );
    expect(screen.getByTestId("image-grid")).toBeInTheDocument();
  });
});

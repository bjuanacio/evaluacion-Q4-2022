import { render, screen } from "@testing-library/react";
import { GifsProvider } from "../../../context/gifs-context/gifs-context";
import { Gallery } from "./gallery";

describe("TopBar", () => {
  it("should render successfully", () => {
    render(
      <GifsProvider>
        <Gallery />
      </GifsProvider>
    );
    expect(screen.getByTestId("image-grid")).toBeInTheDocument();
  });
});

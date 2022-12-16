import { render, screen } from "@testing-library/react";
import Gifs from "./gifs";
import { Info } from "../../../../utils/enums/info";
import { GifsProvider } from "../../../../context/gifs-context/gifs-context";

describe("Gifs Component", () => {
  it("should render a component", () => {
    const { container } = render(
      <GifsProvider initialValue={{ gifsList: [] }}>
        <Gifs />
      </GifsProvider>
    );
    const title = container.getElementsByClassName("gifs-list__title");
    expect(title).toBeDefined();
  });
});

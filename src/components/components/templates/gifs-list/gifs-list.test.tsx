import { render, screen } from "@testing-library/react";
import { GifsProvider } from "../../../../context/gifs-context/gifs-context";
import GifsList from "./gifs-list";
import { Info } from "../../../../utils/enums/info";

describe("Gifs List Component", () => {
  it("should render a title", () => {
    render(
      <GifsProvider initialValue={{ gifsList: [] }}>
        <GifsList />
      </GifsProvider>
    );
    const title = screen.getByText(Info.TITLE);
    expect(title).toBeInTheDocument();
  });
});

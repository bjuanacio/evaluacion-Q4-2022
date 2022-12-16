import { render, screen, waitFor } from "@testing-library/react";
import CardList from "./card-list";
import ContextMock from "../../../utils/mocks/ContextMock";
import { gifsMocks } from "../../../utils/mocks/gifsMocks";
import axiosMock from "../../../utils/mocks/axiosMock";

describe("App component", () => {
  it("Should render not found", () => {
    render(
      <ContextMock values={{gifs:[]}}>
        <CardList/>
      </ContextMock>
    );

    const title = screen.getByText("No posee gifs");
    expect(title).toBeInTheDocument();
  });

  it("Should render gifs", async() => {
    axiosMock.get.mockResolvedValueOnce(gifsMocks)
    render(
      <ContextMock values={{gifs: []}}>
        <CardList/>
      </ContextMock>
    );

    await waitFor(() => {
      const cards = screen.getAllByTestId('card');
      expect(cards).toHaveLength(3);
    })
    
  });
});
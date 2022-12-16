import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./card";
import ContextMock from "../../../utils/mocks/ContextMock";
import axiosMock from "../../../utils/mocks/axiosMock";
import { gifsMocks } from "../../../utils/mocks/gifsMocks";

describe("App component", () => {
  it("Should render card", () => {
    render(
      <ContextMock values={{gifs:[]}}>
        <Card card={gifsMocks.data[0]}/>
      </ContextMock>
    );

    expect(screen.getByTestId('card')).toBeInTheDocument()
  });

  it("Should open modal", async () => {
    render(
      <ContextMock values={{gifs:gifsMocks.data}}>
        <Card card={gifsMocks.data[0]}/>
      </ContextMock>
    );

    await fireEvent.click(screen.getByAltText('Delete icon'))
    expect(screen.getByText('Deseas eliminar este GIF?')).toBeInTheDocument()
  });

  it("Should delete card", async () => {
    axiosMock.delete.mockResolvedValueOnce(gifsMocks.data[0])
    render(
      <ContextMock values={{gifs:gifsMocks.data}}>
        <Card card={gifsMocks.data[0]}/>
      </ContextMock>
    );

    await fireEvent.click(screen.getByAltText('Delete icon'))
    expect(screen.getByText('Deseas eliminar este GIF?')).toBeInTheDocument()
    await fireEvent.click(screen.getByText('Eliminar'))
    expect(axiosMock.delete).toBeCalled()
  });

  it("Should cancel delete", async () => {
    axiosMock.delete.mockResolvedValueOnce(gifsMocks.data[0])
    render(
      <ContextMock values={{gifs: gifsMocks.data}}>
        <Card card={gifsMocks.data[0]}/>
      </ContextMock>
    );

    await fireEvent.click(screen.getByAltText('Delete icon'))
    expect(screen.getByText('Deseas eliminar este GIF?')).toBeInTheDocument()
    await fireEvent.click(screen.getByText('Cancelar'))
    expect(screen.queryByText('Deseas eliminar este GIF?')).not.toBeInTheDocument()
  });
});
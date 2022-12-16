import { render, screen, fireEvent } from "@testing-library/react";
import AddCard from "./add-card";
import ContextMock from "../../../utils/mocks/ContextMock";
import axiosMock from "../../../utils/mocks/axiosMock";
import { gifsMocks } from "../../../utils/mocks/gifsMocks";

describe("App component", () => {
  it("Should render not input", () => {
    render(
      <ContextMock values={{gifs:gifsMocks.data}}>
        <AddCard />
      </ContextMock>
    );

    fireEvent.click(screen.getByText('Agregar'))
    expect(axiosMock.post).not.toBeCalled()
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  });

  it("Should call server", async () => {
    axiosMock.post.mockResolvedValueOnce(gifsMocks.data[0])
    render(
      <ContextMock values={{gifs:gifsMocks.data}}>
        <AddCard />
      </ContextMock>
    );

    await fireEvent.input(screen.getByPlaceholderText('URL Link'), {target: {value: 'h'}})
    await fireEvent.click(screen.getByText('Agregar'))
    expect(screen.queryByText('Campo requerido')).not.toBeInTheDocument()
    expect(axiosMock.post).toBeCalled()
  });
});
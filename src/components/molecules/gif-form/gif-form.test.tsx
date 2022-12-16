import { render, screen, fireEvent, act } from "@testing-library/react"
import { GifForm } from "."
import axios from "axios"


describe('Gif form tests', () => {

  it('Should render a properly', () => {
    const onSave = jest.fn()
    render(<GifForm onSave={onSave} />)
    screen.getByText('Agregar')
    screen.getByPlaceholderText('Gif url')
  })

  it('Should show an error when gifURL is empty', () => {
    const onSave = jest.fn()
    render(<GifForm onSave={onSave} />)
    const addButton = screen.getByText('Agregar');
    fireEvent.click(addButton)
    screen.getByText('Gif url es requerido')
  })

  it('Should on save shuld be called', async () => {
    jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve(
      {
        data: {}
      }));
    const onSave = jest.fn()
    render(<GifForm onSave={onSave} />)
    const input = screen.getByPlaceholderText('Gif url')
    fireEvent.change(input, { target: { value: 'asdsfds' } })
    const addButton = screen.getByText('Agregar')
    fireEvent.click(addButton)
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(onSave).toHaveBeenCalled()
  })

  it('Should show an error when service fail', async () => {
    jest.spyOn(axios, 'post').mockImplementation(() => Promise.reject());
    const onSave = jest.fn()
    render(<GifForm onSave={onSave} />)

    const input = screen.getByPlaceholderText('Gif url')
    fireEvent.change(input, { target: { value: 'asdsfds' } })
    const addButton = screen.getByText('Agregar')
    fireEvent.click(addButton)
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    screen.getByText('Se ha producido un error al comsumir el servicio')
  })

})
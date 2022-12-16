import { render, screen, fireEvent, act } from "@testing-library/react"
import { GifCard } from "."
import axios from "axios"
import { Gif } from "../../../utils/interfaces/gif.interface"


describe('Gif form tests', () => {

  const gif: Gif = {
    url: 'sfdsg',
    id: "1"
  }

  it('Should show delete modal', () => {
    const onDelete = jest.fn()
    render(<GifCard gif={gif} onDelete={onDelete} />)
    const icon = screen.getByTestId('deleteIcon')
    fireEvent.click(icon)
    screen.getByText('¿Desea eliminar este gif?')
  })

  it('Should close modal on cancel click', () => {
    const onDelete = jest.fn()
    render(<GifCard gif={gif} onDelete={onDelete} />)
    const icon = screen.getByTestId('deleteIcon')
    fireEvent.click(icon)
    screen.getByText('¿Desea eliminar este gif?')
    const cancelButton = screen.getByText('Cancelar')
    fireEvent.click(cancelButton)
    expect(screen.queryByText('¿Desea eliminar este gif?')).not.toBeInTheDocument()
  })


  it('Should onDelete have to be called', async () => {
    jest.spyOn(axios, 'delete').mockImplementation(() => Promise.resolve(
      {
        data: {}
      }));
    const onDelete = jest.fn()
    render(<GifCard gif={gif} onDelete={onDelete} />)
    const icon = screen.getByTestId('deleteIcon')
    fireEvent.click(icon)
    screen.getByText('¿Desea eliminar este gif?')
    const deleteButton = screen.getByText('Eliminar')
    fireEvent.click(deleteButton)
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(onDelete).toHaveBeenCalled()
  })


})
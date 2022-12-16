import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Gif } from '../../../utils/interfaces/gif'
import Card from './card'

describe('Card test suite', () => {
  const gif: Gif = {
    "id": 3,
    "url": "example.com",
    "author_id": 7
  }
  const deleteMock = jest.fn()

  it('should display the gif', () => {
    render(<Card gif={gif} />)
    const image = screen.getByAltText("img3")
    expect(image).toBeInTheDocument()
  })

  it('should display confirmMsg', () => {
    render(<Card gif={gif} />)
    const deleteIcon = screen.getByAltText('Delete icon')
    fireEvent.click(deleteIcon)
    const titleDelete = screen.getByText('Deseas eliminar este GIF?')
    expect(titleDelete).toBeInTheDocument()
  })

  it('should execute delete action', () => {
    render(<Card gif={gif} />)
    const deleteIcon = screen.getByAltText('Delete icon')
    fireEvent.click(deleteIcon)
    const deleteButton = screen.getAllByRole('button')[0]
    fireEvent.click(deleteButton)
    expect(deleteButton).toBeInTheDocument()
  })

  it('should execute cancel action', () => {
    render(<Card gif={gif} />)
    const deleteIcon = screen.getByAltText('Delete icon')
    fireEvent.click(deleteIcon)
    const cancelButon = screen.getAllByRole('button')[1]
    fireEvent.click(cancelButon)
  })
})

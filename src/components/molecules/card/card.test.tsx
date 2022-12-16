import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gif } from '../../../utils/interfaces/gif'
import Card from './card'

describe('Card', () => {
  const gif: Gif = {
    id: 1,
    url: 'https://media.tenor.com/Q4qyZizrNGMAAAAj/thor-love-and-thunder-marvel-studios.gif',
    idAuthor: 16,
  }

  const deleteMock = jest.fn()
  const setActiveGifMock = jest.fn()

  it('should display the image gif', () => {
    render(<Card gif={gif} deleteGif={deleteMock} setActiveGif={setActiveGifMock} />)
    const image = screen.getByAltText("https://media.tenor.com/Q4qyZizrNGMAAAAj/thor-love-and-thunder-marvel-studios.gif")
    expect(image).toBeInTheDocument()
  })

  it('should display tree buttons', () => {
    render(<Card gif={gif} deleteGif={deleteMock} setActiveGif={setActiveGifMock} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('should execute delete action', () => {
    render(<Card gif={gif} deleteGif={deleteMock} setActiveGif={setActiveGifMock} />)
    const deleteButton = screen.getAllByRole('button')[1]
    userEvent.click(deleteButton)
    expect(deleteMock.mock.calls).toHaveLength(1)
  })

  it('should execute activeGif action', () => {
    render(<Card gif={gif} deleteGif={deleteMock} setActiveGif={setActiveGifMock} />)
    const activeButton = screen.getAllByRole('button')[0]
    const cancelButton = screen.getAllByRole('button')[2]
    userEvent.click(activeButton)
    userEvent.click(cancelButton)
    expect(deleteMock.mock.calls).toHaveLength(2)
  })
})

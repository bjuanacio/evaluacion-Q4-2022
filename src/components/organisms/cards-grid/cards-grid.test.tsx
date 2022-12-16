import { render, screen } from '@testing-library/react'
import { Gif } from '../../../utils/interfaces/gif'
import CardsGrid from './cards-grid'

describe('Cards Grid Component', () => {
  const gifsList: Gif[] = [
    {
      id: 1,
      url: 'https://media.tenor.com/Q4qyZizrNGMAAAAj/thor-love-and-thunder-marvel-studios.gif',
      idAuthor: 16,
    },
    {
        id: 2,
        url: 'https://media.tenor.com/Q4qyZizrNGMAAAAj/thor-love-and-thunder-marvel-studios.gif',
        idAuthor: 16,
      },
  ]
  it('should display the empty gifs message', () => {
    render(
      <CardsGrid
        gifsList={[]}
        deleteGif={() => {}}
        setActiveGif={() => {}}
      />
    )
    const message = screen.getByText(/No Posee Gifs/i)
    expect(message).toBeInTheDocument()
  })

  it('should display a list of two gifs', () => {
    render(
      <CardsGrid
        gifsList={gifsList}
        deleteGif={() => {}}
        setActiveGif={() => {}}
      />
    )
    const cards = screen.getAllByAltText('https://media.tenor.com/Q4qyZizrNGMAAAAj/thor-love-and-thunder-marvel-studios.gif')
    expect(cards).toHaveLength(2)
  })
})

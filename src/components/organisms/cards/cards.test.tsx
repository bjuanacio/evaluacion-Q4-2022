import { render, screen } from '@testing-library/react'
import { Gif } from '../../../utils/interfaces/gif'
import Cards from './cards'

describe('Cards test suite', () => {
  const gifsMock: Gif[] = [
    {
      "id": 3,
      "url": "example.com",
      "author_id": 7
    },
    {
      "id": 5,
      "url": "example.com",
      "author_id": 7
    },
    {
      "id": 9,
      "url": "example.com",
      "author_id": 7
    },
    {
      "id": 15,
      "url": "https://media.tenor.com/BE3w5Fl3BKsAAAAC/merry-christmas.gif",
      "author_id": 7
    }
  ]
  it('should display empty gifs message', () => {
    render(
      <Cards
        gifList={[]}
      />
    )
    const message = screen.getByText("No posee gifs.")
    expect(message).toBeInTheDocument()
  })

  it('should display a list of two players', () => {
    render(
      <Cards
        gifList={gifsMock}
      />
    )
    const cards = screen.getAllByAltText(/img15/i)
    expect(cards).toHaveLength(1)
  })
})

import { render, screen } from '@testing-library/react'
import Deck from './deck'
import { GifsProvider } from '../../../context/gifs-context/gifs-context';

describe('Deck Test', () => {
  it('should render a title', () => {
    render(
      <GifsProvider>
        <Deck />
      </GifsProvider>
    )
    const title = screen.getByText(/Gif Galery/i)
    expect(title).toBeInTheDocument()
  })
})

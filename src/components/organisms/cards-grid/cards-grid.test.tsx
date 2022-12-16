/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react'
import CardsGrid from './cards-grid'
import { GiftProps } from '../../../utils/interfaces/index';

describe('Cards Grid Component', () => {
  const gifsList: GiftProps[] = [
    {
      id: 0,
      author_id: 1,
      url: 'url1'
    },
    {
      id: 1,
      author_id: 1,
      url: 'url2'
    }
  ]
  it('should display the empty gifs message', () => {
    render(
      <CardsGrid
        gifsList={[]}
        deleteGif={()=>{}}
      />
    )
    const message = screen.getByText(/No posee gifs/i)
    expect(message).toBeInTheDocument()
  })

  it('should display a list of two gifs', () => {
    const { container } = render(
      <CardsGrid
        gifsList={gifsList}
        deleteGif={()=>{}}
      />
    )
    // eslint-disable-next-line testing-library/no-container
    expect(container.getElementsByClassName('card').length).toBe(2);
  })
})

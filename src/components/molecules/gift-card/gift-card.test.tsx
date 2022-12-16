import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GiftCard from './gift-card'
import { act } from 'react-dom/test-utils'

describe('GiftCard component', () => {
  const deleteGift = jest.fn()
  const setStateModal=jest.fn()
  const gift = {
    id: 1,
    url: 'example.jpg',
    author_id: 18
  }
  it('should render with a player', () => {
    render(<GiftCard gift={gift} deleteGift={deleteGift} stateModal setStateModal={setStateModal}/>)
    const GiftCardFound = screen.getByText('Gift Galery')
    expect(GiftCardFound).toBeDefined()
    //expect(screen.getByText(player.attack)).toBeVisible()
  })

  xit('should call the funtion edit player when clicking', () => {
    render(<GiftCard gift={gift} deleteGift={deleteGift} stateModal setStateModal={setStateModal}/>)
    const buttonFound = screen.getAllByRole('button')
    act(() => {
      userEvent.click(buttonFound[0])
    })
    expect(deleteGift).toBeCalled()
  })
})

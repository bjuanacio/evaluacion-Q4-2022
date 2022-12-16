import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './card'
import { GiftProps } from '../../../utils/interfaces/index';

describe('Card', () => {
  const gif: GiftProps = {
    id: 1,
    author_id: 1,
    url: 'urlllll'
  }

  const deleteMock = jest.fn()

  it('should display the gif', () => {
    render(<Card gif={gif} deleteGif={deleteMock} />)
    const image = screen.getByTestId('card')
    expect(image).toBeInTheDocument()
  })

  it('should display two buttons', () => {
    render(<Card gif={gif} deleteGif={deleteMock} />)
    const buttons = screen.getAllByRole('img')
    expect(buttons).toHaveLength(2)
  })


  it('should execute delete action', () => {
    render(<Card gif={gif} deleteGif={deleteMock}  />)
    const deleteButton = screen.getAllByRole('button')[1]
    userEvent.click(deleteButton)
    expect(deleteMock.mock.calls).toHaveLength(1)
  })
})

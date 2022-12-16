import { render, screen } from '@testing-library/react'
import Gif from './gif'
import userEvent from '@testing-library/user-event'

let mockShowModal = false
const mockOnDelete = jest.fn()
const mockToggleModal = jest.fn()

jest.mock('./use-gif/use-gif', () => ({
  useGif: () => ({
    showModal: mockShowModal,
    onDelete: mockOnDelete,
    toggleModal: mockToggleModal
  })
}))

describe('Gif', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const props = {
    author_id: 10,
    id: 10,
    url: 'url'
  }

  test('should render', () => {
    render(<Gif {...props} />)
    expect(screen.getByTestId('gif-testid')).toBeVisible()
  })

  test('should toggle modal on close click', async () => {
    render(<Gif {...props} />)
    const button = screen.getByAltText('close')
    expect(mockToggleModal).toHaveBeenCalledTimes(0)
    await userEvent.click(button)
    expect(mockToggleModal).toHaveBeenCalledTimes(1)
  })

  test('should show modal', async () => {
    mockShowModal = true
    render(<Gif {...props} />)
    expect(screen.getByTestId('modal-testid')).toBeVisible()
  })

  test('should close show modal', async () => {
    mockShowModal = true
    render(<Gif {...props} />)
    expect(mockToggleModal).toHaveBeenCalledTimes(0)
    await userEvent.click(screen.getByAltText('close'))
    expect(mockToggleModal).toHaveBeenCalledTimes(1)
  })
})

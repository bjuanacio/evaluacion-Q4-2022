import { render, screen } from '@testing-library/react'
import GifAdd from './gif-add'
import userEvent from '@testing-library/user-event'

const mockErrorMessage = ''
const mockGifUrl = 'url'
const mockHandleInputChange = jest.fn()
const mockHandleOnAdd = jest.fn()
let mockWidth = 1000
jest.mock('./use-gif-add/use-gif-add', () => ({
  useGifAdd: () => ({
    errorMessage: mockErrorMessage,
    gifUrl: mockGifUrl,
    handleInputChange: mockHandleInputChange,
    handleOnAdd: mockHandleOnAdd
  })
}))

jest.mock('../../../hooks/use-window-size/use-window-size', () => ({
  useWindowSize: () => ({
    width: mockWidth
  })
}))

describe('GifAdd', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render', () => {
    render(<GifAdd />)
    expect(screen.getByTestId('gif-add-testid')).toBeVisible()
  })

  test('should show input', () => {
    render(<GifAdd />)
    expect(screen.getByRole('textbox')).toHaveValue('url')
  })

  test('should call on input change', async () => {
    render(<GifAdd />)
    const input = screen.getByRole('textbox')
    expect(mockHandleInputChange).toHaveBeenCalledTimes(0)
    await userEvent.type(input, '1')
    expect(mockHandleInputChange).toHaveBeenCalledTimes(1)
  })

  test('should show handle add on click', async () => {
    render(<GifAdd />)
    const button = screen.getByRole('button')
    expect(mockHandleOnAdd).toHaveBeenCalledTimes(0)
    await userEvent.click(button)
    expect(mockHandleOnAdd).toHaveBeenCalledTimes(1)
  })

  test('should render + on button when screen is small', async () => {
    mockWidth = 200
    render(<GifAdd />)
    expect(screen.getByText('+')).toBeVisible()
  })
})

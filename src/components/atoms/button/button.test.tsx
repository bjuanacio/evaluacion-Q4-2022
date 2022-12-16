import { render, screen } from '@testing-library/react'
import Button from './button'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  const mockOnClick = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render', () => {
    render(<Button onClick={mockOnClick}>test</Button>)
    expect(screen.getByRole('button')).toBeVisible()
  })

  test('should show text', () => {
    render(<Button onClick={mockOnClick}>test</Button>)
    expect(screen.getByText('test')).toBeVisible()
  })

  test('should show execute on click', async () => {
    render(<Button onClick={mockOnClick}>test</Button>)
    expect(mockOnClick).toHaveBeenCalledTimes(0)
    await userEvent.click(screen.getByRole('button'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})

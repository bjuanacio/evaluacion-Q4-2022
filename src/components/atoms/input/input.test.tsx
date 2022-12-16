import { render, screen } from '@testing-library/react'
import Input from './input'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  const mockOnChange = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render', () => {
    render(<Input value="test" onChange={mockOnChange} />)
    expect(screen.getByRole('textbox')).toBeVisible()
  })

  test('should show text', () => {
    render(<Input value="test" onChange={mockOnChange} />)
    expect(screen.getByRole('textbox')).toHaveValue()
  })

  test('should  execute on change', async () => {
    render(<Input value="test" onChange={mockOnChange} />)
    expect(mockOnChange).toHaveBeenCalledTimes(0)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, '1')
    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(mockOnChange).toHaveBeenCalledWith('test1')
  })

  test('should show error', async () => {
    render(<Input value="test" error={true} errorHelper="helper" onChange={mockOnChange} />)
    expect(screen.getByText('helper')).toBeVisible()
  })
})

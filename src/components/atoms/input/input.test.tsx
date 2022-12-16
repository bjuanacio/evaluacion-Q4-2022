import { render, screen } from '@testing-library/react'
import { Input } from './input'
import userEvent from '@testing-library/user-event'

describe('first', () => {
    const onChange = jest.fn()
  it('should render input text', () => {
    render(<Input onChange={onChange} type='text' />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render based on props', () => {
    render(<Input onChange={onChange} placeholder="test" value="test" type='text' />)
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test')
    expect(screen.getByRole('textbox')).toHaveValue('test')
  })

  it('should show error message', () => {
    render(<Input onChange={onChange} errorMessage="error" type='text' />)
    const errorMessage = screen.getByText('error')
    expect(errorMessage).toBeInTheDocument()
  })

  it('should show red input when variant is error', () => {
    render(<Input variant="error" onChange={onChange} errorMessage="error" type='text' />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('input__field--error')
  })
})
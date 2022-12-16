import { render, screen } from '@testing-library/react'
import { InputBP } from './input'

describe('Input test suite', () => {
  const onChange = jest.fn()
  it('should render input text', () => {
    render(<InputBP onChange={onChange} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render based on props', () => {
    render(<InputBP onChange={onChange} placeholder="test" value="test" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test')
    expect(screen.getByRole('textbox')).toHaveValue('test')
  })

  it('should show error message', () => {
    render(<InputBP onChange={onChange} errorMessage="error" />)
    const errorMessage = screen.getByText('error')
    expect(errorMessage).toBeInTheDocument()
  })

  it('should show red input when variant is error', () => {
    render(<InputBP variant="error" onChange={onChange} errorMessage="error" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('input__field--error')
  })
})

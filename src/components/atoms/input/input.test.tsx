import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './input'

describe('Input component', () => {
  const onChange = jest.fn()
  it('should render with placeholder', () => {
    render(<Input placeholder="Nombre" />)
    const inputFound = screen.findByPlaceholderText('Nombre')
    expect(inputFound).toBeDefined()
  })

  it('should show message when have an error', () => {
    render(<Input messageError="This is an error" labelMessage="Nombre" />)
    const inputFound = screen.getByText('Nombre no válido')
    expect(inputFound).toBeDefined()
  })

  it('should have a class error when have one error', () => {
    render(<Input messageError="This is an error" labelMessage="Nombre" />)
    const inputFound = screen.getByRole('textbox')
    expect(inputFound).toHaveClass('input__box--error')
  })

  it('should call onChange', () => {
    render(<Input onChange={onChange} />)
    const input = screen.getByRole('textbox')

    expect(onChange).toBeCalledTimes(0)

    userEvent.type(input, 'test')

    expect(onChange).toBeCalledTimes(4)
  })
})

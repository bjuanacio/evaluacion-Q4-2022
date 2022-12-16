import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonBP } from './button'

describe('Button test suite', () => {
  it('should display label', () => {
    render(<ButtonBP label="text" />)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveTextContent('text')
  })

  it('should have a secondary variant', () => {
    render(<ButtonBP label="text" variant='secondary' />)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveClass('button--sec')
  })

  it('should trigger click event', () => {
    const onClick = jest.fn()
    render(<ButtonBP onClick={() => onClick()} label="Text" />)
    const buttonFound = screen.getByRole('button')
    fireEvent.click(buttonFound)
    expect(onClick).toBeCalled()
  })
})

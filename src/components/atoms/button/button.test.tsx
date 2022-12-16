import { render, screen } from '@testing-library/react'
import Button from './button'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe('Button component tests', () => {
  it('should display the text sended', () => {
    render(<Button>Some Text</Button>)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveTextContent('Some Text')
  })

  it('should have a secondary class', () => {
    render(<Button variant="secondary">Some Text</Button>)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveClass('button--secondary')
  })

  it('should call a function when clicked in', () => {
    const onClick = jest.fn()
    render(<Button onClick={() => onClick()}>Some Text</Button>)
    const buttonFound = screen.getByRole('button')
    act(() => {
      userEvent.click(buttonFound)
    })
    expect(onClick).toBeCalled()
  })

  it('should hace disabled atribute', () => {
    render(<Button disabled>Some Text</Button>)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveAttribute('disabled')
  })
})

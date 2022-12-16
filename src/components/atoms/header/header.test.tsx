import { render, screen } from '@testing-library/react'
import Header from './header'

describe('Header component', () => {
  it('should render with a principal text', () => {
    render(<Header principalText="Some text" />)
    const headerFound = screen.getByText('Some text')
    expect(headerFound).toBeDefined()
  })
  it('should have the class header__text', () => {
    render(<Header principalText="Some text" />)
    const headerFound = screen.getByText('Some text')
    expect(headerFound).toHaveClass('header__text')
  })
})

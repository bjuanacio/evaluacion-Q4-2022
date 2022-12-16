import { render, screen } from '@testing-library/react'
import Home from './home'

describe('Home tests', () => {
  it('should render with props', () => {
    render(<Home />)
    const homeFound = screen.getByText('Gift Galery')
    expect(homeFound).toBeDefined()
  })
})

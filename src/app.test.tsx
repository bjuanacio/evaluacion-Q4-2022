import { render, screen } from '@testing-library/react'
import App from './app'

describe('App component', () => {
  test('should render', () => {
    render(<App />)
    const title = screen.getByText('Gif Galery')
    expect(title).toBeVisible()
  })
})

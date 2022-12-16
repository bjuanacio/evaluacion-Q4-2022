import { render, screen } from '@testing-library/react'
import GifList from './gif-list'
import { IGif } from '../../../utils/interfaces/gif'

let mockGifs = [] as IGif[]
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: () => jest.fn(),
  useQuery: () => ({
    data: mockGifs
  })
}))

describe('GifList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render', () => {
    render(<GifList />)
    expect(screen.getByTestId('gif-list-testid')).toBeVisible()
  })

  test('should show empty message', () => {
    render(<GifList />)
    expect(screen.getByText('No posee gifs')).toBeVisible()
  })

  test('should show gifs', async () => {
    mockGifs = [{ author_id: 1, id: 1, url: 'url' }]
    render(<GifList />)
    expect(screen.getByTestId('gif-testid')).toBeVisible()
  })
})

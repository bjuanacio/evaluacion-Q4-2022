import { renderHook, act } from '@testing-library/react-hooks'
import useDeck from './use-deck'
import { GifsProvider } from '../../../../context/gifs-context/gifs-context';

describe('useDeck Hock', () => {
  it('should execute fetchData function', () => {
    const mockGetGifs = jest.fn()
    const { result } = renderHook(() => useDeck(), {
      wrapper: ({ children }) => (
        <GifsProvider
          initialValue={{
            getGifs: mockGetGifs,
          }}
        >
          {children}
        </GifsProvider>
      )
    })
    act(() => {
      result.current.fetchData()
    })
    expect(mockGetGifs).toBeCalledTimes(2)
  })
})

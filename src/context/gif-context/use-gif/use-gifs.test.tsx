import { renderHook, act, waitFor } from '@testing-library/react'
import { Gif } from '../../../utils/interfaces/gif'
import { GifsStateContext } from '../gifs-context'
import axios from 'axios'
import useGif from './use-gifs'
describe('useGifsTest', () => {
  it('should add gif when addGif function is called', async () => {
    const gif: Gif = {
      id: 1,
      url: 'https://media.tenor.com/Q4qyZizrNGMAAAAj/thor-love-and-thunder-marvel-studios.gif',
      idAuthor: 16,
    }
    const mockPost = jest.spyOn(axios, 'post').mockResolvedValue({ data: gif })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: [gif] })

    const { result } = renderHook(() => useGif())
    act(() => {
      result.current.addGif(gif)
    })
    await waitFor(() => {
      expect(mockPost).toBeCalled()
    })
    await waitFor(() => {
      expect(mockGet).toBeCalled()
    })
    expect(result.current.gifsList).toHaveLength(1)
  })

  it('should delete gif when deleteGif function is called', async () => {
    const initialValues: Partial<GifsStateContext> = {
      gifsList: [
        {
          id: 1,
          url: 'https://media.tenor.com/Q4qyZizrNGMAAAAj/thor-love-and-thunder-marvel-studios.gif',
          idAuthor: 16,
        }
      ],
      activeGif: undefined,
    }
    const mockDelete = jest.spyOn(axios, 'delete').mockResolvedValue({ data: true })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: [] })
    const { result } = renderHook(() => useGif(initialValues))
    act(() => {
      result.current.deleteGif(1)
    })
    expect(result.current.gifsList).toHaveLength(0)
    await waitFor(() => {
      expect(mockDelete).toBeCalled()
    })
    await waitFor(() => {
      expect(mockGet).toBeCalled()
    })
  })

})

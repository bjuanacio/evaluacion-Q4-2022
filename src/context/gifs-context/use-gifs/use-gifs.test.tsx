import { renderHook, act } from '@testing-library/react-hooks'
import axios from 'axios'
import { GiftProps } from '../../../utils/interfaces/index';
import { GifsStateContext } from '../gifs-context';
import useGifs from './use-gifs';


describe('useGifTest', () => {
  


  it('should fetch players', async () => {
    const gifs: GiftProps[] = [
      {
        id: 1,
        author_id: 1,
        url: 'urlll'
      }
    ]
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: gifs })
    const { result, waitForNextUpdate } = renderHook(() => useGifs())
    act(() => {
      result.current.getGifs()
    })
    await waitForNextUpdate()
    expect(result.current.gifsList).toEqual(gifs)
    expect(result.current.showLoadingOverlay).toBeFalsy()
    expect(mockGet).toBeCalled()
  })



  it('should add player when addPlayer function is called', async () => {
    const gif: GiftProps = {
      id: 1,
      author_id: 1,
      url: 'urlll'
    }
    const mockPost = jest.spyOn(axios, 'post').mockResolvedValue({ data: gif })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: [gif] })

    const { result, waitForNextUpdate } = renderHook(() => useGifs())
    act(() => {
      result.current.addGif(gif)
    })
    await waitForNextUpdate()
    expect(result.current.gifsList).toHaveLength(1)
    expect(result.current.inputValue).toBe('')
    expect(mockPost).toBeCalled()
    expect(mockGet).toBeCalled()
  })

  it('should delete player when deletePlayer function is called', async () => {
    const initialValues: Partial<GifsStateContext> = {
      gifsList: [
        {
          id: 1,
          author_id: 1,
          url: 'urlll'
        },
        {
          id: 2,
          author_id: 1,
          url: 'urlll222'
        }
      ]
    }

    const mockDelete = jest.spyOn(axios, 'delete').mockResolvedValue({ data: true })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: [] })

    const { result, waitForNextUpdate } = renderHook(() => useGifs(initialValues))
    act(() => {
      result.current.deleteGif({
        id: 2,
        author_id: 1,
        url: 'urlll222'
      })
    })
    await waitForNextUpdate()
    expect(result.current.gifsList).toHaveLength(0)
    expect(result.current.inputValue).toBe('')
    expect(mockDelete).toBeCalled()
    expect(mockGet).toBeCalled()
  })

})

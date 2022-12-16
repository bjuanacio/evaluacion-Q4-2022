import { deleteGifById, getAllGifs, postGif } from './gifs-service'
import axios from 'axios'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('gifService', () => {
  test('should return all data', async () => {
    mockAxios.get.mockResolvedValue({ data: [1] })
    const res = await getAllGifs()
    expect(res).toEqual([1])
  })

  test('should return post data', async () => {
    mockAxios.post.mockResolvedValue({ data: { author_id: 3, id: 1, url: 'url' } })
    const res = await postGif('url')
    expect(res).toEqual({ author_id: 3, id: 1, url: 'url' })
  })

  test('should return delete data', async () => {
    mockAxios.delete.mockResolvedValue({ data: { author_id: 3, id: 1, url: 'url' } })
    const res = await deleteGifById({ author_id: 3, id: 1, url: 'url' })
    expect(res).toEqual({ author_id: 3, id: 1, url: 'url' })
  })
})

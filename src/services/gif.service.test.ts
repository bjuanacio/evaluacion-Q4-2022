import axios from 'axios'


import { GiftProps } from '../utils/interfaces/index';
import { fetchGifts, createGif, deleteGif } from './gif.services';

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('Gif Service', () => {

  const gifts: GiftProps[] = [
    {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg',
      author_id: 1
    }
  ]

  it('should return gif lists', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: gifts })
    const giftsResponse = await fetchGifts()
    expect(giftsResponse).toEqual(gifts)
  })

  it('should return gift when addPGift is called', async () => {
    const gift = gifts[0]
    jest.spyOn(axios, 'post').mockResolvedValue({ data: gift })
    const gifResponse = await createGif(gift)
    expect(gifResponse).toEqual(gift)
  })

  it('should delete gif when deleteGif is called', async () => {
    mockAxios.delete.mockResolvedValue({ data: {} })
    const gifResponse = await deleteGif(gifts[0])
    expect(gifResponse).toEqual(true)
  })
})

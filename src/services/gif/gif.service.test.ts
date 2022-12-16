import axios from 'axios'
import { Gif } from '../../utils/interfaces/gif'
import { fetchGifs, addGif, deleteGif } from './gif.service'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('Gif Service', () => {
  it('should return gif lists', async () => {
    const gifs: Gif[] = [
      {
        id: 1,
        author_id: 10,
        url:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg',
      }, 
      
    ]
    jest.spyOn(axios, 'get').mockResolvedValue({ data: gifs })
    const playersResponse = await fetchGifs()
    expect(playersResponse).toEqual(gifs)
  })

  it('should return gif when addGif is called', async () => {
    const gif: Gif = {
      id: 1,
      author_id: 10,
    }
    jest.spyOn(axios, 'post').mockResolvedValue({ data: gif })
    const gifResponse = await addGif(gif)
    expect(gifResponse).toEqual(gif)
  })


  it('should delete gif when deleteGif is called', async () => {
    mockAxios.delete.mockResolvedValue({ data: {} })

    const playerResponse = await deleteGif(1)

    expect(playerResponse).toEqual(true)
  })

})

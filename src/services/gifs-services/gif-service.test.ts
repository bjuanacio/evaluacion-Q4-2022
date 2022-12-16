import axios from "axios"
import { Gif } from "../../utils/interfaces/gif"
import { getGifs, createGif } from './gif-service';

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>
const ID_AUTHOR = process.env.REACT_APP_ID_AUTHOR as string
describe('Service test suite', () => {
    it('Should return gifs list', async () => {
        const gifsMock: Gif[] = [
            {
                "id": 3,
                "url": "example.com",
                "author_id": 1
            },
            {
                "id": 5,
                "url": "example.com",
                "author_id": 1
            },
            {
                "id": 9,
                "url": "example.com",
                "author_id": 1
            },
            {
                "id": 15,
                "url": "https://media.tenor.com/BE3w5Fl3BKsAAAAC/merry-christmas.gif",
                "author_id": 1
            }
        ]
        jest.spyOn(axios, 'get').mockResolvedValue({ data: gifsMock })
        const gifsResponse = await getGifs()
        expect(gifsResponse).toEqual(gifsMock)
    })
    it('should create new gif', async () => {
        const newGif: Gif = {
            url: "example-one.com",
            author_id: parseInt(ID_AUTHOR)
        }
        jest.spyOn(axios, 'post').mockResolvedValue({data: newGif})
        const gifResponse = await createGif(newGif)
        expect(gifResponse).toEqual(newGif)
    })
})
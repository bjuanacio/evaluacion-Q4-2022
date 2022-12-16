import axios from 'axios'
import { Gift } from '../utils/interfaces/interfaces'
import { UserService } from './user.service'

jest.mock('axios')

const mockAxios = axios as jest.Mocked<typeof axios>

describe('User Service', () => {
  it('should return gifts', async () => {
    const myArray: Gift[] = [
      {
        id: 1,
        url: 'https://media.tenor.com/VzvFB3Apq-8AAAAM/captain-america-avengers.gif',
        author_id: 18
      },
      {
        id: 2,
        url: 'https://media.tenor.com/aQ7JU8GcbJoAAAAM/the-avengers-marvel.gif',
        author_id: 18
      },
      {
        id: 3,
        url: 'https://media.tenor.com/mme2qVjaN8oAAAAM/avengers-endgame-marvel.gif',
        author_id: 18
      },
      {
        id: 4,
        url: 'https://media.tenor.com/AC9M9sJJQa8AAAAM/marvel-future-revolution-marvel-future-fight.gif',
        author_id: 18
      },
      {
        id: 5,
        url: 'https://media.tenor.com/32g9ZstNXGMAAAAM/avengers-endgame-captain-america.gif',
        author_id: 18
      },
      {
        id: 6,
        url: 'https://media.tenor.com/VzvFB3Apq-8AAAAM/captain-america-avengers.gif',
        author_id: 18
      }
    ]
    mockAxios.get.mockResolvedValue({ data: myArray })
    const playerResponse = await UserService.getMyGifts()
    expect(playerResponse).toEqual(myArray)
  })
})

import { act, renderHook } from '@testing-library/react';
import { Gif } from '../../utils/interfaces/gif';
import { UseGifs } from './use-gifs';
import { deleteGif } from '../../services/gifs-services/gif-service';


describe('Use gifs test suite', () => {

    const gifMock: Gif =
    {
        "id": 3,
        "url": "example.com",
        "author_id": 7
    }

    it('should render hook', () => {
        const { result } = renderHook(() => UseGifs())

        expect(result.current.addGif).toBeDefined()
        expect(result.current.gifsList).toBeDefined()
        expect(result.current.removeGif).toBeDefined()
    })

    it('should add gif', () => {
        const { result } = renderHook(() => UseGifs())

        act(() => {
            result.current.addGif(gifMock)
        })
        expect(result.current.addGif).toBeDefined()
    })

    it('should remove gif', () => {
        const { result } = renderHook(() => UseGifs())

        act(() => {
            result.current.removeGif(gifMock)
        })
        expect(result.current.removeGif).toBeDefined()
    })
})
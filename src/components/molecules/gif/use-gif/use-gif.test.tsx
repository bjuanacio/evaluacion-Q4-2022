import { act, renderHook } from '@testing-library/react'

import { useGif } from './use-gif'

const mockMutate = jest.fn()
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: () => ({
    mutate: mockMutate
  })
}))

describe('useGif', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useGif())
    expect(result.current.showModal).toEqual(false)
  })

  test('should toggleModal value', async () => {
    const { result } = renderHook(() => useGif())
    expect(result.current.showModal).toEqual(false)
    await act(async () => result.current.toggleModal())
    expect(result.current.showModal).toEqual(true)
  })

  test('should toggleModal and call service on Delete', async () => {
    const { result } = renderHook(() => useGif())
    expect(result.current.showModal).toEqual(false)
    expect(mockMutate).toHaveBeenCalledTimes(0)
    await act(async () => result.current.onDelete({ author_id: 3, id: 3, url: 'url' }))
    expect(result.current.showModal).toEqual(true)
    expect(mockMutate).toHaveBeenCalledTimes(1)
  })
})

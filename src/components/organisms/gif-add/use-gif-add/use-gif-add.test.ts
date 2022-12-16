import { act, renderHook } from '@testing-library/react'

import { useGifAdd } from './use-gif-add'

const mockMutate = jest.fn()
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useMutation: () => ({
    mutate: mockMutate
  })
}))

describe('useGifAdd', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useGifAdd())
    expect(result.current.gifUrl).toEqual('')
  })

  test('should change value on input change', async () => {
    const { result } = renderHook(() => useGifAdd())
    await act(async () => result.current.handleInputChange('test'))
    expect(result.current.gifUrl).toEqual('test')
  })

  test('should set error if wrong input', async () => {
    const { result } = renderHook(() => useGifAdd())
    await act(async () => result.current.handleInputChange('test'))
    await act(async () => result.current.handleOnAdd())
    expect(result.current.errorMessage).toEqual('Coloca una url de gif válida')
  })

  test('should call post if correct input', async () => {
    const { result } = renderHook(() => useGifAdd())
    expect(mockMutate).toHaveBeenCalledTimes(0)
    await act(async () => result.current.handleInputChange('https://test.gif'))
    await act(async () => result.current.handleOnAdd())
    expect(mockMutate).toHaveBeenCalledTimes(1)
  })
})

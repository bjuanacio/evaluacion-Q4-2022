import { useReducer } from 'react'
import { Gif } from '../../utils/interfaces/Gif'

export interface GifState {
  gifs: Gif[]
}

type GifReducerAction =
  | {
      type: 'getGifs'
      payload: Gif[]
    }
  | {
      type: 'deleteGif'
      payload: number
    }
  | {
      type: 'addGif'
      payload: Gif
    }

export const INITIAL_STATE = {
  gifs: []
}

const gifsReducer = (state: GifState, action: GifReducerAction): GifState => {
  switch (action.type) {
    case 'getGifs':
      return {
        ...state,
        gifs: action.payload,
      }
    case 'deleteGif':
      return {
        ...state,
        gifs: state.gifs.filter((t) => t.id !== action.payload)
      }
    case 'addGif':
      return {
        ...state,
        gifs: [...state.gifs, action.payload],
      }
  }
}

const useGifs = (initialState?: GifState) => {
  const [gifState, gifDispatch] = useReducer(gifsReducer, initialState ?? INITIAL_STATE)
  return { gifState, gifDispatch }
}

export default useGifs
export type GifHook = ReturnType<typeof useGifs>

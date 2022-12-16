import { createContext, FC, useContext } from 'react'
import { GiftProps } from '../../utils/interfaces'
import useGifs from './use-gifs/use-gifs'

export interface GifsStateContext {
  gifsList: GiftProps[]
  inputValue: string
  activeModal: boolean
  showLoadingOverlay: boolean
  activeGif: GiftProps | undefined
  handleChangeModal: () => void
  deleteGif: (gif: GiftProps) => void
  addGif: (gif: GiftProps) => void
  addActiveGif: (id: number) => void
  handleChangeInput: (searchTerm: string) => void
  getGifs: () => void
  displayDelete: boolean
  handleDisplayDelete: (value: boolean) => void
}

export interface GifsProviderProps {
  children: React.ReactNode
  initialValue?: Partial<GifsStateContext>
}

export const GifsContext = createContext<GifsStateContext>(
  {} as unknown as GifsStateContext
)

export const useGifsContext = () => useContext(GifsContext)

export const GifsProvider: FC<GifsProviderProps> = ({ children, initialValue }) => {
  const values = useGifs(initialValue)
  return <GifsContext.Provider value={values}>{children}</GifsContext.Provider>
}

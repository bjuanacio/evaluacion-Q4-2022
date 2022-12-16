import React, { createContext, useContext } from 'react'
import { INITIAL_STATE as gifInitialState, GifHook } from './use-gif/use-gif'
import useGifs from './use-gif/use-gif'

interface AppContextHooks {
  gifReducer: GifHook
}

const AppContext = createContext<AppContextHooks>({
  gifReducer: { gifState: gifInitialState, gifDispatch: () => {} }
})

export const useAppContext = () => useContext(AppContext)

interface ProviderProps {
  children: React.ReactNode
}

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const gifReducer = useGifs()

  const store = {
    gifReducer
  }

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export default AppContext

import { FC } from 'react'
import { GifState } from '../../context/use-gif/use-gif'

import AppContext from '../../context/app-context'
import useGifs from '../../context/use-gif/use-gif'

export interface ContextMockProps {
  values?: GifState
  children: React.ReactNode
}

const ContextMock: FC<ContextMockProps> = ({ values, children }) => {
  const gifReducer = useGifs(values)

  const store = {
    gifReducer
  }

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>
}

export default ContextMock
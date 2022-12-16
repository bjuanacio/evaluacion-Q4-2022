import { QueryClientProvider } from '@tanstack/react-query'
import './app.scss'
import GifAdd from './components/organisms/gif-add/gif-add'

import GifList from './components/organisms/gif-list/gif-list'
import { queryClient } from './services/query-service/query-service'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <section className="app__title">
          <h1>Gif Galery</h1>
        </section>
        <GifAdd />
        <GifList />
      </div>
    </QueryClientProvider>
  )
}

export default App

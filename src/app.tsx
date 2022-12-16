import './app.scss'
import Team from './components/pages/principal/principal'
import { GifsProvider } from './context/gifs-context/gifs-context'

function App() {
  return (
    <div className="app">
      <GifsProvider>
        <Team />
      </GifsProvider>
    </div>
  )
}

export default App

import "./app.scss";
import Gallery from "./components/template/gallery/gallery";
import { GifsProvider } from "./context/gifs-context/gifs-context";

const App = () => {
  
  return (
    <div className="app">
      <GifsProvider>
        <Gallery />
      </GifsProvider>
    </div>
  );
};

export default App;

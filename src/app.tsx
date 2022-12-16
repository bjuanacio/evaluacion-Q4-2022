
import "./app.scss";
import Team from "./components/pages/team/team";
import { GifsProvider } from "./context/gifs-context/gifs-context";

const App = () => {
  return (
    <div className="app">
      <GifsProvider>
        <Team/>
      </GifsProvider>
    </div>
  );
};

export default App;

import "./app.scss";
import { GiftsProvider } from "./context/gift-context/gift-context";
import Team from "./components/pages/team/team";

const App = () => {
  return (
    <div className="app">
      <GiftsProvider>
        <Team />
      </GiftsProvider>
    </div>
  );
};

export default App;

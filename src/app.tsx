import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";
import Gifs from "./components/components/pages/gifs/gifs";
import { GifsProvider } from "./context/gifs-context/gifs-context";

const App = () => {
  return (
    <GifsProvider>
      <Gifs />
    </GifsProvider>
  );
};

export default App;

import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";
import { GifProvider } from "./context/gif-context/gif-context";
import Landing from "./components/organism/landing/landing";
import ModalForm from "./components/organism/modal-form/modal-form";

const App = () => {
  return (
    <div className="app">
      <GifProvider>
        <h1>
          <b>Gif Galery</b>
        </h1>
        <Landing />
        <ModalForm />
      </GifProvider>
    </div>
  );
};

export default App;

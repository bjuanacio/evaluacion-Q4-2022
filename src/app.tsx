import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";
import { useApi } from "./hook/use-api/use-api";
import { useEffect } from "react";
import { Header } from "./components/molecules/main/header";

const App = () => {
  return (
    <div className="app">
      <section>
        <Header />
      </section>
    </div>
  );
};

export default App;

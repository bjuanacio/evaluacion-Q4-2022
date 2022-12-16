import { AppContextProvider } from "./context/app-context";

import CardList from "./components/organisms/card-list/card-list";
import AddCard from "./components/organisms/add-card/add-card";

import "./app.scss";


const App = () => {
  return (
    <AppContextProvider>
      <div className="app">
        <AddCard />
        <CardList />
      </div>
    </AppContextProvider>
  );
};

export default App;

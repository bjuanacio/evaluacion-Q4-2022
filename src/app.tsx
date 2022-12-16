import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";

import "./app.scss";
import { GiftsProvider } from "./context/gift-context/gift-context";
import Team from "./components/pages/team/team";

const App = () => {
  return (
    <div className="app">
      <GiftsProvider>
        <Team />
      </GiftsProvider>
      {/* <div className="app">
        <h1>Gif Galery</h1>
        <section>
          
        </section>
        <section>
          <h2>Íconos</h2>
          <div className="app__icon-container">
            <div className="app__icon-description">
              <img className="app__icon" src={DeleteIcon} alt="Delete icon" />
              <span>Delete icon</span>
            </div>
            <div className="app__icon-description">
              <img className="app__icon" src={WarningIcon} alt="Warning icon" />
              <span className="app__color-title">Warning icon</span>
            </div>
          </div>
        </section>
        <section>
          <h2>API REST</h2>
          <div>
            <a
              href="https://documenter.getpostman.com/view/21329689/2s8YsnYwZr"
              rel="noreferrer"
              target="_blank"
            >
              Documentación de la API REST
            </a>
          </div>
        </section>
        <section>
          <h2>GIFs</h2>
          <div>
            <a
              href="https://tenor.com/es-419/search/avengers-gifs"
              rel="noreferrer"
              target="_blank"
            >
              Página de GIFs
            </a>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default App;

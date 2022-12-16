import "./app.scss";
import CreateBox from "./components/molecules/create-box/create-box";
import GifGrid from "./components/organisms/gif-grid/gif-grid";
import GifProvider from "./context/gif-context/gif-context";
import appConstants from "./utils/constants/app-constants";

const App = () => {
	return (
		<div className="app">
			<GifProvider>
				<main className="app__container">
					<h1 className="app__title">{appConstants.APP_TITLE}</h1>
				</main>
				<CreateBox />
				<GifGrid />
			</GifProvider>
		</div>
	);
};

export default App;

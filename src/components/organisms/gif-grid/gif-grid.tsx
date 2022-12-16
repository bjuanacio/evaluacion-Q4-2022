import "./gif-grid.scss";
import { FC, useContext, useEffect } from "react";
import { Gif } from "../../../utils/interfaces/gift-response";
import { GifContext } from "../../../context/gif-context/gif-context";
import GifCard from "../../molecules/gif-card/gif-card";

interface GifGridProps {}

const GifGrid: FC<GifGridProps> = () => {
	const { getGifs, gifs, isLoading, deleteGif } = useContext(GifContext);

	useEffect(() => {
		getGifs();
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (gifs.length === 0) {
		return <p>No posee gifs</p>;
	}

	return (
		<section className="gif-grid">
			{gifs.map((gif) => (
				<GifCard gifUrl={gif.url} key={gif.id} onRemove={() => deleteGif(gif)} />
			))}
		</section>
	);
};

export default GifGrid;

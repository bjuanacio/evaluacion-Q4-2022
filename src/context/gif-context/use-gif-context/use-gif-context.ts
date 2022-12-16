import { useState } from "react";
import gifService from "../../../services/gif-service/gif-service";
import { Gif } from "../../../utils/interfaces/gift-response";
import { UseGifContextReturn } from "./use-gif-context.interfaces";

export const useGifContext = (): UseGifContextReturn => {
	const [gifs, setGifs] = useState<Gif[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const getGifs = async () => {
		try {
			const gifResponse = await gifService.getGifByAuthor();
			setGifs(gifResponse.data);
		} catch (error) {
			console.error(error);
		}
		setIsLoading(false);
	};

	const addGif = () => {};
	const deleteGif = async (gif: Gif) =>
		gifService.deleteGif(gif.url, gif.id.toString(), gif.author_id.toString());

	return { getGifs, addGif, deleteGif, gifs, isLoading };
};

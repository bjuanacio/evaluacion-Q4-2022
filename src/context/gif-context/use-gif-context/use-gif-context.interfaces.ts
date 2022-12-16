import { Gif } from "../../../utils/interfaces/gift-response";

export interface UseGifContextReturn {
    getGifs: () => void
	addGif: (gif: Partial<Gif>) => void;
	deleteGif: (gif: Gif) => void;
	gifs: Gif[];
    isLoading: boolean;
}

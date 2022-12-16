import { createContext, FC, ReactNode } from "react";
import { useGifContext } from "./use-gif-context/use-gif-context";
import { UseGifContextReturn } from "./use-gif-context/use-gif-context.interfaces";

export const GifContext = createContext({} as UseGifContextReturn);

interface ContextProps {
	children: ReactNode;
}

const GifProvider: FC<ContextProps> = ({ children }) => {
	const { getGifs, addGif, deleteGif, gifs, isLoading } = useGifContext();

	return (
		<GifContext.Provider
			value={{ getGifs, addGif, deleteGif, gifs, isLoading }}
		>
			{children}
		</GifContext.Provider>
	);
};

export default GifProvider;

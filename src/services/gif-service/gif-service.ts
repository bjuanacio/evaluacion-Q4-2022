import axios from "axios";
import { Gif } from "../../utils/interfaces/gift-response";

const API_URL = process.env.REACT_APP_API_URL as string;
const AUTHOR_ID = process.env.REACT_APP_AUTHOR_ID as string;

const gifService = {
	getGifByAuthor: async (authorId = AUTHOR_ID) => {
		return await axios.get<Gif[]>(`${API_URL}/?author_id=${authorId}`);
	},
	createGif: async (url: string, authorId = AUTHOR_ID) => {
		return await axios.post(`${API_URL}`, {
			url: url,
			author_id: authorId,
		});
	},
	deleteGif: async (url: string, gifId: string, authorId = AUTHOR_ID) => {
		return await axios.delete(`${API_URL}`, {
			data: {
				url: url,
				author_id: authorId,
				id: gifId,
			},
		});
	},
};

export default gifService;

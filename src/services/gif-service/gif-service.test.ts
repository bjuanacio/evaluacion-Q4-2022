import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import gifService from "./gif-service";
import { Gif } from "../../utils/interfaces/gift-response";

const axiosMock = new MockAdapter(axios);

describe("Player Service", () => {
	const mockedGifs: Gif[] = [
		{
			author_id: 14,
			id: 1,
			url: "gif_url",
		},
	];

	it("should get all GIFs uploaded by an author", async () => {
		axiosMock.onGet().reply(200, mockedGifs);
		const gifs = await gifService.getGifByAuthor();
		expect(gifs.data).toBeInstanceOf(Array);
		expect(gifs.data[0]).toEqual(mockedGifs[0]);
	});
});

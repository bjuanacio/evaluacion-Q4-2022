import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { render, screen } from "@testing-library/react";
import GifProvider from "../../../context/gif-context/gif-context";
import { Gif } from "../../../utils/interfaces/gift-response";
import GifGrid from "./gif-grid";

const axiosMock = new MockAdapter(axios);

describe("GifGrid component", () => {
	const mockedGifs: Gif[] = [
		{
			author_id: 14,
			id: 1,
			url: "gif_url",
		},
		{
			author_id: 14,
			id: 2,
			url: "gif_url2",
		},
	];

	it("Should render", async () => {
		axiosMock.onGet().reply(200, mockedGifs);

		render(<GifGrid />, { wrapper: GifProvider });

		const gitCards = await screen.findAllByAltText("gif");
		expect(gitCards.length).toBe(2);
	});
	it("Should indicate that there aren't gifs available", async () => {
		axiosMock.onGet().reply(200, []);

		render(<GifGrid />, { wrapper: GifProvider });

		const gitCards = await screen.queryAllByAltText("gif");
		expect(gitCards.length).toBe(0);
	});
});

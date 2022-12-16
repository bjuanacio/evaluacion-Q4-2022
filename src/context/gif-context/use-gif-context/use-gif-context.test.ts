import {
	renderHook,
	act,
	RenderHookResult,
} from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Gif } from "../../../utils/interfaces/gift-response";
import { useGifContext } from "./use-gif-context";
const axiosMock = new MockAdapter(axios);

describe("useGifContext Hook", () => {
	it("should return an empty array on first render", async () => {
		let hook: unknown;
		await act(async () => {
			hook = renderHook(() => useGifContext());
		});
		const { result } = hook as RenderHookResult<any, any>;
		expect(result.current.gifs.length).toBe(0);
	});

	it("should populate the gifs array", async () => {
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

		axiosMock.onGet().reply(200, mockedGifs);

		let hook: unknown;
		await act(async () => {
			hook = renderHook(() => useGifContext());
		});
		const { result } = hook as RenderHookResult<any, any>;

		await act(async () => {
			result.current.getGifs();
		});

		expect(result.current.gifs.length).toBe(2);
	});
});

import {
  getGifs,
  gifService,
  createGif,
  deleteGif,
  fullfilledReq,
} from "./gif-service";

describe("Gifs Service", () => {
  test("interceptor fulfilled", () => {
    let reqConfig = fullfilledReq({ method: "get", data: undefined });
    expect(reqConfig.data).toBeUndefined();

    reqConfig = fullfilledReq({ method: "post", data: {} });
    expect(reqConfig.data).toHaveProperty("author_id");
  });
  it("should Get Gifs", async () => {
    const getMock = jest.spyOn(gifService, "get").mockResolvedValue([]);
    await getGifs();
    expect(getMock).toHaveBeenCalled();
  });
  it("should Create Gif", async () => {
    const postMock = jest.spyOn(gifService, "post").mockResolvedValue({});
    await createGif({ url: "http:...." });
    expect(postMock).toHaveBeenCalled();
  });
  it("should Get Gifs", async () => {
    const deleteMock = jest.spyOn(gifService, "delete").mockResolvedValue([]);
    await deleteGif({ id: 123, url: "http:..." });
    expect(deleteMock).toHaveBeenCalled();
  });
});

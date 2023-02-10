import axios from "axios";
import { removeGif } from "./gif-services";

describe("Gif services", () => {
  it("should false true when the removeGif service resposes ok but has code_error", async () => {
    const mockDelete = jest.spyOn(axios, "delete").mockResolvedValue({
      data: {
        code_error: "Is an error",
      },
    });

    const response = await removeGif({
      id: 1,
      url: "",
    });

    expect(mockDelete).toBeCalled();
    expect(response).toBeFalsy();
  });

  it("should return true when the removeGif service resposes ok", async () => {
    const mockDelete = jest.spyOn(axios, "delete").mockResolvedValue({});

    const response = await removeGif({
      id: 1,
      url: "",
    });

    expect(mockDelete).toBeCalled();
    expect(response).toBeTruthy();
  });

  /* it("should get an error when removeGif service is out", async () => {
    const mockDelete = jest
      .spyOn(axios, "delete")
      .mockRejectedValue(new Error("some"));

    const wrapper = () => {
      removeGif({
        id: 1,
        url: "",
      });
    };

    expect(wrapper).toThrow(Error);
  }); */
});

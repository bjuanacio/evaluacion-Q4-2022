import { render } from "@testing-library/react";
import Input from "./input";

describe("button", () => {
  test("should have the correct style", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});

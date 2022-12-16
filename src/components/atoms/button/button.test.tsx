import { render } from "@testing-library/react";
import Button from "./button";

describe("button", () => {
  test("primary", () => {
    const { container } = render(<Button variant="primary" />);
    expect(container).toMatchSnapshot();
  });
  test("secondary", () => {
    const { container } = render(<Button variant="secondary" />);
    expect(container).toMatchSnapshot();
  });
});

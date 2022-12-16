import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should display inner text", () => {
    render(<Button>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveTextContent("Test Text");
  });

  it("should have a small class", () => {
    render(<Button size="small">Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveClass("button--small");
  });

  it("should trigger the click", async () => {
    const onClick = jest.fn();
    render(<Button onClick={() => onClick()}>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    await userEvent.click(buttonFound);
    expect(onClick).toBeCalled();
  });

  it("should disabled atribute", () => {
    render(<Button disabled>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveAttribute("disabled");
  });
});

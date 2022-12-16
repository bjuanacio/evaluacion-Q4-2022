import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("displays send text", () => {
    render(<Button>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveTextContent("Test Text");
  });

  it("shows a white color class", () => {
    render(<Button color="white">Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveClass("button--white");
  });

  it("triggers the click action", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={() => onClick()}>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    await user.click(buttonFound);
    expect(onClick).toBeCalled();
  });

  it("disables atribute", () => {
    render(<Button disabled>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveAttribute("disabled");
  });
});

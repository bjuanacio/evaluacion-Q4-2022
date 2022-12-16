import { render, screen, act } from "@testing-library/react";
import { Button } from "./button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should display inner text", () => {
    render(<Button type="primary">Agg</Button>)
    const buttonFound = screen.getByRole("button")
    expect(buttonFound).toHaveTextContent("Agg")
  });

  it("should have a secondary class", () => {
    render(<Button type="secondary">Test Text</Button>)
    const buttonFound = screen.getByRole("button")
    expect(buttonFound).toHaveClass("button--small")
  });

  it("should trigger the click", () => {
    const onClick = jest.fn()
    render(<Button type="primary" onClick={() => onClick()}>Test Text</Button>)
    const buttonFound = screen.getByRole("button");
    act(() => {
      userEvent.click(buttonFound)
    })
    expect(onClick).toBeCalled()
  });

  it('should have a small class', () => {
    render(<Button type="primary" size="small">Test Text</Button>)
    const buttonFound = screen.getByRole('button')
    expect(buttonFound).toHaveClass('button--small')
  })
});

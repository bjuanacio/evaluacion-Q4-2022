import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";
import { act } from "react-dom/test-utils";

describe("Button", () => {
  it("should display inner text", () => {
    render(<Button>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveTextContent("Test Text");
  });

  it("should have a primary class", () => {
    render(<Button>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveClass("button--primary");
  });

  it("should have a secondary class", () => {
    render(<Button variant="secondary">Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    expect(buttonFound).toHaveClass("button--secondary");
  });

  it("should trigger the click", () => {
    const onClick = jest.fn();
    render(<Button onClick={() => onClick()}>Test Text</Button>);
    const buttonFound = screen.getByRole("button");
    act(() => {
      fireEvent.click(buttonFound);
    });
    expect(onClick).toBeCalled();
  });
});

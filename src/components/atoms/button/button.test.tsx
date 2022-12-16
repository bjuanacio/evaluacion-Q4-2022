import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./button";

describe("Button tests", () => {
  const onClick = jest.fn();
  it("should render a button base on props", () => {
    render(<Button text="TEST" onClick={onClick} />);
    expect(screen.getByRole("button", { name: /TEST/i })).toBeVisible();
  });

  it("should call onClick when clicked", async () => {
    render(<Button text="TEST" onClick={onClick} />);
    const button = screen.getByRole("button", { name: /TEST/i });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoundedButton from "./rounded-button";

describe("RoundedButton tests", () => {
  const onClick = jest.fn();
  it("should render RoundedButton", () => {
    render(<RoundedButton onClick={onClick} icon="delete" />);
    expect(screen.getByRole("button")).toBeVisible();
  });

  it("should call onClick", async () => {
    render(<RoundedButton onClick={onClick} icon="warning" />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});

import { render, screen } from "@testing-library/react";
import EmptyMessage from "./empty-message";

describe("EmptyMessage tests", () => {
  it("should render EmptyMessage", () => {
    render(<EmptyMessage message="This is a message" />);

    const message = screen.getByText("This is a message");
    expect(message).toBeInTheDocument();

    const icon = screen.getByAltText("Warning icon");
    expect(icon).toBeInTheDocument();
  });
});

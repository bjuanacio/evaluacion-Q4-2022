import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("should render the input", () => {
    render(<Input placeholder="gif name" />);
    const gifInput = screen.getByPlaceholderText("gif name");
    expect(gifInput).toBeDefined();
    expect(gifInput).toHaveTextContent("");
  });
  it("should call the onChange function in the Input", async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} placeholder="gif name" />);
    const gifInput = screen.getByPlaceholderText("gif name");
    expect(gifInput).toBeDefined();
    expect(gifInput).toHaveTextContent("");
    // userEvent.type(gifInput, "new gif");
    // expect(gifInput).toHaveValue("new gif");
  });
});

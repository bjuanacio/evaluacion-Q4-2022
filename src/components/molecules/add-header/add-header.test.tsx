import { fireEvent, render, screen } from "@testing-library/react";
import AddHeader from "./add-header";

describe("Add Header Test", () => {
  it("renders input element", () => {
    render(<AddHeader handleCreate={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders button element", () => {
    render(<AddHeader handleCreate={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  }); 
});

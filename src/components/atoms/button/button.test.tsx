import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

describe("Button component", () => {
	it("Should render", () => {
		render(<Button onClick={() => {}} title="test title" />);

		const title = screen.getByText("test title");
		expect(title).toBeInTheDocument();
	});

	it("Should handle a click", () => {
		const mockedOnClick = jest.fn();

		render(<Button onClick={mockedOnClick} title="clickable" />);

		const button = screen.getByText("clickable");

		expect(mockedOnClick).toHaveBeenCalledTimes(0);

		fireEvent.click(button);

		expect(mockedOnClick).toHaveBeenCalledTimes(1);
	});

	it("Should render as outlined", () => {
		const mockedOnClick = jest.fn();

		render(<Button onClick={mockedOnClick} title="outlined" outline />);

		const button = screen.getByText("outlined");

		expect(button.getAttribute("class")).toBe("button button--outline");
	});
});

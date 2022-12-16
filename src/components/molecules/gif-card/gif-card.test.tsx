import { render, screen, fireEvent, act } from "@testing-library/react";
import GifCard from "./gif-card";

describe("GifCard component", () => {
	const gifCardProps = {
		onRemove: jest.fn(),
		gifUrl: "nowhere",
	};
	it("Should render", () => {
		render(<GifCard {...gifCardProps} />);

		const gifImage = screen.getByAltText("gif");
		expect(gifImage).toBeInTheDocument();
	});

	it("Should have the gif's url", () => {
		render(<GifCard {...gifCardProps} />);

		const gifImage = screen.getByAltText("gif");
		expect(gifImage.getAttribute("src")).toBe("nowhere");
	});

	it("Should have the delete menu off by default", () => {
		render(<GifCard {...gifCardProps} />);

		const deleteMenu = screen.getByRole("menu");
		expect(deleteMenu.getAttribute("class")!.includes("--opened")).toBe(
			false
		);
	});
	it("Should open the delete menu", () => {
		render(<GifCard {...gifCardProps} />);

		const removeIcon = screen.getByAltText("Delete icon");
		act(() => {
			fireEvent.click(removeIcon);
		});
		const deleteMenu = screen.getByRole("menu");

		expect(deleteMenu.getAttribute("class")!.includes("--opened")).toBe(
			true
		);
	});
});

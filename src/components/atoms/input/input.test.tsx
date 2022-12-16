import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./input";

describe("Input component", () => {
	it("Should render", () => {
		render(
			<Input
				onChange={() => {}}
				error={false}
				placeHolder="test placeholder"
				value="test"
			/>
		);

		const placeholder = screen.getByPlaceholderText("test placeholder");
		expect(placeholder).toBeInTheDocument();
	});
});

import { render, screen, fireEvent } from "@testing-library/react";
import CreateBox from "./create-box";

describe("CreateBox component", () => {
	it("should render", () => {
		render(<CreateBox />);

		const buttonAdd = screen.getByText("Agregar");
		expect(buttonAdd).toBeInTheDocument();
	});
});

import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Card } from "./card";
describe("card test", () => {

    
  it("should render card", async () => {
    render(<Card item="url" onClick={()=>{}} />);

  });
  it("should press button", async () => {
    const deleteAction =jest.fn();
    render(<Card item="url" onClick={deleteAction}/>);
    userEvent.click(screen.getByTestId('delete'));
    expect( await screen.findByText('¿Desea eliminar este gif?')).toBeInTheDocument();

  });
  it("should  delete", async () => {
    const deleteAction =jest.fn();
    render(<Card item="url" onClick={deleteAction}/>);
    userEvent.click(screen.getByTestId('delete'));
   
  });
});

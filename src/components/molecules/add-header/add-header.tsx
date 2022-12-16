import { FC } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import { AddHeaderProps } from "./add-header.interfaces";
import "./add-header.scss";
import useAddHeader from "./use-add-header/use-add-header";

const AddHeader: FC<AddHeaderProps> = ({ handleCreate }) => {
  const { currentValue, showError, handleCreateButton, handleCurrentValue } =
    useAddHeader({ handleCreate: handleCreate });
  return (
    <div className="add-header">
      <Input
        onChange={handleCurrentValue}
        placeholder="Ingrese la Url"
        value={currentValue}
        errorMessage={showError ? "Url no ingresada" : ""}
      />
      <Button onClick={handleCreateButton}>Agregar</Button>
    </div>
  );
};

export default AddHeader;

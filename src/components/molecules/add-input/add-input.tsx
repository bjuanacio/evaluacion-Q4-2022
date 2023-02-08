import { FC, useState } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import "./add-input.scss";

interface AddInputProps {
  onAdd: (value: string) => void;
  placeHolder?: string;
  messageError?: string;
}

const AddInput: FC<AddInputProps> = ({ onAdd, placeHolder, messageError }) => {
  const [value, setValue] = useState<string>("");

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const handleOnClick = () => {
    onAdd(value);
  };

  return (
    <div className="add-input">
      <div className="add-input__input">
        <Input
          onChange={onChangeText}
          placeHolder={placeHolder}
          messageError={messageError}
        />
      </div>
      <div className="add-input__button">
        <Button onClick={handleOnClick}>Agregar</Button>
      </div>
    </div>
  );
};

export default AddInput;

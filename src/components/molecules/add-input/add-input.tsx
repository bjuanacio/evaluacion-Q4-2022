import { FC, useEffect, useState } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import "./add-input.scss";

interface AddInputProps {
  onAdd: (value: string) => void;
  placeHolder?: string;
  messageError?: string;
  value?: string;
}

const AddInput: FC<AddInputProps> = ({
  onAdd,
  placeHolder,
  messageError,
  value,
}) => {
  const [currentValue, setCurrentValue] = useState<string>("");

  useEffect(() => {
    setCurrentValue(value ?? "");
  }, [value]);

  const onChangeText = (text: string) => {
    setCurrentValue(text);
  };

  const handleOnClick = () => {
    onAdd(currentValue);
  };

  return (
    <div className="add-input">
      <div className="add-input__input">
        <Input
          onChange={onChangeText}
          placeHolder={placeHolder}
          messageError={messageError}
          value={currentValue}
        />
      </div>

      <div className="add-input__button">
        <Button onClick={handleOnClick}>Agregar</Button>
      </div>
      <div className="add-input__button-responsive">
        <Button onClick={handleOnClick}>+</Button>
      </div>
    </div>
  );
};

export default AddInput;

import { ChangeEvent } from "react";

export interface UseFormReturn {
  form: FormValues;
  formErrors: FormErrors;
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  isValidForm: () => boolean;
}

export interface UseFormProps {
  [key: string]: FormInputController;
}
export interface FormInputController {
  value: string;
  validators: ((value: string) => string)[];
  type?: "multiselect";
}
export interface FormValues {
  [key: string]: string;
}
export interface FormErrors {
  [key: string]: string[];
}

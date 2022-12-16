import { useEffect, useState } from "react";
import { initialForm, UseFormReturn } from './use-form.interfaces';

export const useForm = (initialForm:initialForm):UseFormReturn => {
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const onInputChange = ({ target }: any) => {
    target.preventDefault();
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

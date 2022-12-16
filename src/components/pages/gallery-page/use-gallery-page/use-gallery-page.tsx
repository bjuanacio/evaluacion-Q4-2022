import { useEffect } from "react";
import { useForm } from "../../../../hooks/use-form/use-form";
import { UseFormProps } from "../../../../hooks/use-form/use-form.interfaces";
import {
  startFetchingGifs,
  startAddingGif,
} from "../../../../store/actions/actions";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../store/hooks/reduxHooks";
import {
  selectFetchingGifs,
  selectAddGifError,
  selectGifsList,
} from "../../../../store/selectors/selectors";
import { isURL } from "../../../../utils/functions/validation-helper/validation-helper";

export const useGalleryPage = () => {
  const initialForm: UseFormProps = {
    url: { value: "", validators: [isURL] },
  };

  const dispatch = useAppDispatch();
  const fetchingGifs = useAppSelector(selectFetchingGifs);
  const addGifError = useAppSelector(selectAddGifError);
  const gifs = useAppSelector(selectGifsList);

  const { form, formErrors, onChange, isValidForm, resetForm } =
    useForm(initialForm);
  const { url } = form;

  useEffect(() => {
    dispatch(startFetchingGifs());
  }, []);

  const handleAdd = () => {
    if (!isValidForm()) {
      console.log("IS NOT VALID");
      return;
    }

    dispatch(startAddingGif(url));
    resetForm();
  };

  return {
    fetchingGifs,
    gifs,
    url,
    formErrors,
    addGifError,
    onChange,
    handleAdd,
  };
};

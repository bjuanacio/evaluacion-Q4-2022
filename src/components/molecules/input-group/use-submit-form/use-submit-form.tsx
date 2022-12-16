import { useState } from 'react'
import { useManageGifs } from '../../../../utils/hooks/use-manage-gifs/use-manage-gifs';
import { Gif } from '../../../../utils/interfaces/gif';

export const useSubmitForm = () => {
  const { handleAddGif } = useManageGifs();
  const [form, setForm] = useState<Gif>({
    url: '',
    id: -1
  });
  const handleValueChange = (value : string, key: keyof Gif) => {
    setForm((form) => ({...form, [key]:value}))
  }
  const handleSubmit = () => {
    handleAddGif(form);
  }

  return {
    form,
    handleValueChange,
    handleSubmit
  }
}

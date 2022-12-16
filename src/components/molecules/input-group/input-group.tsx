import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import { useSubmitForm } from './use-submit-form/use-submit-form'
import './input-group.scss'

export const InputGroup = () => {
  const { form, handleValueChange, handleSubmit } = useSubmitForm();
  return (
    <div className='input-group'>
      <Input placeholder='Gif URL' onChange={(val) => handleValueChange(val, 'url')} value={form.url}/>
      <Button onClick={() => handleSubmit()}>Agregar</Button>
    </div>
  )
}
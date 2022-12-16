import { FC} from "react"
import { Button } from "../../atoms/button"
import { Input } from "../../atoms/input"
import { GifFormProps } from "./gif-form.interface"
import './gif-form.scss'
import { useGifForm } from "./use-gif-form/use-gif-form"

export const GifForm: FC<GifFormProps> = ({ onSave }) => {

  const { gifUrl, error, setGifUrl, onClickHandle } = useGifForm(onSave)

  return (
    <div className='gif-form'>
      <div className='gif-form__input-container'>
        <Input placeholder="Gif url" initialValue={gifUrl} onChange={setGifUrl} />
        {error && (
          <p
            data-testid='errorlabel'
            className='gif-form__input--error'
          >{error}</p>
        )}
      </div>
      <div>
        <Button variant='primary' onClick={onClickHandle}>Agregar</Button>
      </div>
    </div>
  )
}
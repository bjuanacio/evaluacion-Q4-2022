import Input from '../../atoms/input/input'
import Button from '../../atoms/button/button'
import { Styles } from './gif-add.styles'
import { useWindowSize } from '../../../hooks/use-window-size/use-window-size'
import { useGifAdd } from './use-gif-add/use-gif-add'

const GifAdd = () => {
  const { errorMessage, gifUrl, handleInputChange, handleOnAdd } = useGifAdd()
  const { width } = useWindowSize()

  return (
    <Styles data-testid="gif-add-testid">
      <Input
        value={gifUrl}
        onChange={handleInputChange}
        error={!!errorMessage}
        errorHelper={errorMessage}
      />
      <Button onClick={handleOnAdd}>{width && width > 425 ? 'Agregar' : '+'}</Button>
    </Styles>
  )
}

export default GifAdd

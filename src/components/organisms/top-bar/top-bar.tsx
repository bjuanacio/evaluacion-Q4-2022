import { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './top-bar.scss'

interface TopBarProps {
  gifsList: Gif[]
  handleAddGif: () => void
  handleGifUrl: (term: string) => void
  gifUrl: string
}

export const TopBar: FC<TopBarProps> = (props) => {
  return (
    <div className="top-bar">
      <Input
        value={props.gifUrl}
        placeholder="Gif URL"
        onChange={props.handleGifUrl}
      />
      <Button type='primary' onClick={props.handleAddGif}>Agregar</Button>
    </div>
  )
}

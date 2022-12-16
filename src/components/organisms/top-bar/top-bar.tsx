import { FC } from 'react'
import { InfoText } from '../../../utils/enums/info-text'
import { GiftProps } from '../../../utils/interfaces'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './top-bar.scss'

interface TopBarProps {
  handleChangeInput: (term: string) => void
  value: string
  addGif: (gif: GiftProps) => void
}

const TopBar: FC<TopBarProps> = (props) => {
  return (
    <>
      <h1 className='title'>
        {InfoText.TITLE}
      </h1>
      <div className="top-bar">
        <div className='top-bar__input'>
          <Input
            value={props.value}
            placeholder="Gif URL"
            onChange={props.handleChangeInput}
          />
        </div>
        <Button onClick={() => props.addGif({author_id:1, url: props.value})}>Agregar</Button>
      </div>
    </>
  )
}

export default TopBar

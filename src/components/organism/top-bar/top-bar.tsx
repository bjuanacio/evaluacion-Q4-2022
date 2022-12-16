import React, { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import { Input } from '../../atoms/input/input'
import { Button } from '../../atoms/button/button'
import './top-bar.scss'

interface TopBarProps {
    handleChangeModal: () => void
    gifsList: Gif[]
    handleSearchTerm: (term: string) => void
    searchTerm: string
  }

export const TopBar: FC<TopBarProps> = (props) => {
  return (
    <div className="top-bar">
    <Input
      value={props.searchTerm}
      disabled={props.gifsList.length === 0}
      placeholder="Gif URL"
      onChange={props.handleSearchTerm}
    />
    <Button onClick={props.handleChangeModal}>Agregar</Button>
  </div>
  )
}

import React, { FC } from 'react'
import DeleteIcon from "../../../assets/delete-icon.svg";

interface CardProps {
    url: string
}

export const CardGif: FC<CardProps> = (props) => {
    console.log('Entro',props.url)
  return (
    <div>
        <img src={props.url} alt="gif" />
        <img className="app__icon" src={DeleteIcon} alt="Delete icon" />
    </div>
  )
}

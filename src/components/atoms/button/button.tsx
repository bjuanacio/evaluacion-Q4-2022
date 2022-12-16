import React, { FC } from 'react'
import './button.scss'
import { Submit } from '../../molecules/submit';

interface ButtonProps{
    type?: 'submit';
}

 export const Button:FC<ButtonProps> = ({
type,
}) => {

  return (
    <button className='button' type={type}>Agregar</button>
  )
}



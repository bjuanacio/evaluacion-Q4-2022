import React, { FC } from 'react'
import './button.scss'

export interface ButtonProps {
  onClick?: () => void
  label: string
  size?: 'small'
  variant?: 'secondary' | 'primary'
}

export const ButtonBP: FC<ButtonProps> = ({ onClick, label, variant }) => {

  let classBtn = 'button'
  if(variant === 'secondary') classBtn = 'button--sec'

  return (
    <button
      className={classBtn}
      onClick={() => onClick!()}
    >
      {label}
    </button>
  )
}

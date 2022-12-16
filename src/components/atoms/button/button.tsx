import React, { FC } from 'react'
import './button.scss'

export interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  size?: 'small'
  disabled?: boolean
  btnSecundary?: boolean
}

export const Button: FC<ButtonProps> = ({ onClick, children, size, disabled = false, btnSecundary }) => {
  return (
    <button
      disabled={disabled}
      className={`button ${size === 'small' ? ' button--small' : ''} ${ btnSecundary ? 'button--secundary' : 'button--primary' }`}
      onClick={() => onClick!()}
    >
      {children}
    </button>
  )
}

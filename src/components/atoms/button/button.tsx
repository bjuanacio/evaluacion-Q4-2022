import React, { FC } from 'react'
import './button.scss'

interface ButtonProps {
  children?: React.ReactNode
  variant?: 'void' | 'inverse'
  size?: 'small'
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, variant, size, onClick }) => {
  return <button
    className={`button ${variant === 'void' ? 'button--void' : variant === 'inverse'? 'button--inverse':''} ${size === 'small' ? 'button--small' : ''}`}
    onClick={onClick}
    >
    {children}
  </button>
}
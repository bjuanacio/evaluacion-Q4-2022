import { FC } from 'react'
import { ButtonProps } from './button.interface'
import './button.scss'

export const Button: FC<ButtonProps> = ({variant = 'primary', children, ...props}) => {
  return <button className={`button button--${variant}`} {...props}>
    {children}
  </button>
}


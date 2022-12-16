import { FC } from 'react'
import './input.scss'
import { Gif } from '../../../utils/interfaces/gif'
import { getValidUrl } from '../../../utils/helpers/helper'

export interface InputProps {
  placeholder?: string
  type?: 'text' | 'password'
  label?: string
  errorMessage?: string
  variant?: 'error' | 'normal'
  value?: string
  name?: keyof Gif
  disabled?: boolean
  onChange: (value: string, name?: keyof Gif) => void
}

export const Input: FC<InputProps> = ({
  placeholder,
  label = '',
  type,
  errorMessage,
  variant,
  onChange,
  value,
  name,
  disabled = false
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        onChange={(e) => onChange(e.target.value, name)}
        className={`input__field ${variant === 'error' ? 'input__field--error' : ''}`}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {!getValidUrl(value) ? (
        <span className="input__error-message">{errorMessage}</span>
      ) : ''}
      
    </div>
  )
}

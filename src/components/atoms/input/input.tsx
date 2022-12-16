import { FC } from 'react'
import './input.scss'
import { Gif } from '../../../utils/interfaces/gif'

export interface InputProps {
  placeholder?: string
  label?: string
  errorMessage?: string
  variant?: 'error' | 'normal'
  value?: string
  name?: keyof Gif
  onChange: (value: string, name?: keyof Gif) => void
}

export const Input: FC<InputProps> = ({
  placeholder,
  label = '',
  errorMessage,
  variant,
  onChange,
  value,
  name,
}) => {
  return (
    <div className="input">
      <label className='input__label' htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        onChange={(e) => onChange(e.target.value, name)}
        className={`input__field ${variant === 'error' ? 'input__field--error' : ''}`}
        value={value}
        placeholder={placeholder}
      />
      <span className="input__error-message">{errorMessage}</span>
    </div>
  )
}
import { FC } from 'react'
import { Gif } from '../../../utils/interfaces/gif'
import './input.scss'
interface InputProps {
  placeholder?: string
  type?: string
  variant?: 'error'
  error?: string | undefined
  onChange: (value: string, key: keyof Gif) => void
  name?: keyof Gif
  value: string
}
export const Input: FC<InputProps> = ({ placeholder, type, variant, error, onChange, name }) => {
  return (
    <div className="input">
      <input placeholder={placeholder} type={type} className={`input__field ${variant === 'error'? 'input__field--error' : ''}`} onChange={(evt) => onChange(evt.target.value, name!)} ></input>
      { error && <span className={`input__feedback ${variant === 'error'? 'input__feedback--error':''}`}>{error}</span>}
    </div>
  )
}
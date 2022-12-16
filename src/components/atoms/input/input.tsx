import { FC, useEffect, useState } from 'react'
import './input.scss'

export interface InputProps {
  placeholder?: string
  type?: 'text'
  errorMessage?: string
  variant?: string
  value?: string
  onChange: (value: string) => void
}

export const InputBP: FC<InputProps> = ({
  placeholder,
  type,
  errorMessage,
  variant,
  onChange,
  value
}) => {
  let classInput = "input__field"
  if(variant === 'error') classInput += " input__field--error"

  return (
    <div className="input">
      <input
        onChange={(e) => onChange(e.target.value)}
        className={classInput}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      <span className="input__error-message">{errorMessage}</span>
    </div>
  )
}

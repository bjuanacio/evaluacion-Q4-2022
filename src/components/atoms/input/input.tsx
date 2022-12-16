import { Styles } from './input.styles'

interface InputProps {
  value: string
  error?: boolean
  errorHelper?: string
  onChange: (arg0: string) => void
}

const Input: React.FC<InputProps> = ({ value, onChange, error = false, errorHelper = '' }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)

  return (
    <Styles error={error}>
      <input value={value} onChange={handleChange}></input>
      {error && <p className="input__helper">{errorHelper}</p>}
    </Styles>
  )
}

export default Input

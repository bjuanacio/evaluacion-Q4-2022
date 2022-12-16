import { Styles } from './button.styles'

interface ButtonProps {
  type?: 'primary' | 'secondary'
  children: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'primary' }) => {
  return (
    <Styles type={type}>
      <button onClick={onClick}>{children}</button>
    </Styles>
  )
}

export default Button

import './button.scss'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
  variant?: 'primary' | 'secondary' |  'transparent'
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
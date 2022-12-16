import { FC } from 'react'
import './header.scss'

export interface HeaderProps {
  principalText: string
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <section className="header">
      <div className="header__h1">
        <h1 className="header__text">{props.principalText}</h1>
      </div>
    </section>
  )
}
export default Header

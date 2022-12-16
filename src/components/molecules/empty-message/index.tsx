import WarningIcon from "../../../assets/warning-icon.svg"
import "./empty-message.scss"

export const EmptyMessage = () => {
  return <div className="message--container">
    <img className="message__icon" src={WarningIcon} alt="Warning icon" />
    <span className="message__text">No posee Gifs</span>
  </div>
}
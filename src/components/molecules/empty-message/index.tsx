import WarningIcon from "../../../assets/warning-icon.svg"

export const EmptyMessage = () => {
  return <div className="app--empty-list">
    <img className="app__icon" src={WarningIcon} alt="Warning icon" />
    <span className="app__message">No posee Gifs</span>
  </div>
}
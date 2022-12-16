import WarningIcon from "../../../assets/warning-icon.svg";

import "./empty-gif-list.scss";

const EmptyGifList = () => {
  return (
    <div data-testid="emptygiflist-testid" className="empty-gif-list">
      <img
        className="empty-gif-list__icon"
        src={WarningIcon}
        alt="Warning Icon"
      />
      <p className="empty-gif-list__description">No posee gifs</p>
    </div>
  );
};

export default EmptyGifList;

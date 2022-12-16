import WarningIcon from "../../../assets/warning-icon.svg";

import "./empty-list.scss";
import { infoText } from "../../../utils//enums/info-text";
const EmptyGifList = () => {
  return (
    <div className="empty-list">
      <img className="empty-list__icon" src={WarningIcon} alt="Warning Icon" />
      <p className="empty-list__description">{infoText.EMPTY_LIST}</p>
    </div>
  );
};

export default EmptyGifList;

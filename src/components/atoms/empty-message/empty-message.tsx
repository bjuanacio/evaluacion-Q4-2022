import { FC } from "react";
import WarningIcon from "../../../assets/warning-icon.svg";
import "./empty-message.scss";

interface EmptyMessageProps {
  message: string;
}

const EmptyMessage: FC<EmptyMessageProps> = ({ message }) => {
  return (
    <div className="empty-message">
      <div>
        <img
          className="empty-message__warning-icon"
          src={WarningIcon}
          alt="Warning icon"
        />
      </div>
      <div>
        <span className="empty-message__message">{message}</span>
      </div>
    </div>
  );
};

export default EmptyMessage;

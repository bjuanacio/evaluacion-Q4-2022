import { FC } from "react";
import "./alert-banner.scss";
import WarningIcon from "../../../assets/warning-icon.svg";

interface AlertBannerProps {
  content: string;
}

const AlertBanner: FC<AlertBannerProps> = ({ content }) => {
  return (
    <div className="alert-banner">
      <img src={WarningIcon} alt="Warning Icon" />
      <h2 className="alert-banner__content">{content}</h2>
    </div>
  );
};

export default AlertBanner;

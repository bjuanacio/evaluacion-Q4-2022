import { FC, useMemo } from "react";
import WarningIcon from "../../../assets/warning-icon.svg";
import DeleteIcon from "../../../assets/delete-icon.svg";

import "./rounded-button.scss";

interface RoundedButtonProps {
  onClick: () => void;
  icon: "warning" | "delete";
  disabled?: boolean;
}

const RoundedButton: FC<RoundedButtonProps> = ({ onClick, icon, disabled }) => {
  const iconImage = useMemo(
    () => (icon === "delete" ? DeleteIcon : WarningIcon),
    [icon]
  );

  return (
    <button className="rounded-button" onClick={onClick} disabled={disabled}>
      <img src={iconImage} alt={icon} />
    </button>
  );
};

export default RoundedButton;

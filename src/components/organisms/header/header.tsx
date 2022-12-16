import { FC } from "react";
import TopBar from "../../molecules/top-bar/top-bar";
import "./header.scss";

interface HeaderProps {
  handleUrlInputChange: (url: string) => void;
  handleAddClick: () => void;
  title: string
  errorInService: boolean
}

export const Header: FC<HeaderProps> = ({
  handleUrlInputChange,
  handleAddClick,
  title,
  errorInService
}) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <TopBar
        handleUrlInputChange={handleUrlInputChange}
        handleAddClick={handleAddClick}
        errorInService={errorInService}
      />
    </div>
  );
};

export default Header;

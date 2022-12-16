import { FC } from "react";
import TopBar from "../../molecules/top-bar/top-bar";
import "./header.scss";

interface HeaderProps {
  handleUrlInputChange: (url: string) => void;
  handleAddClick: () => void;
  title: string
}

export const Header: FC<HeaderProps> = ({
  handleUrlInputChange,
  handleAddClick,
  title,
}) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <TopBar
        handleUrlInputChange={handleUrlInputChange}
        handleAddClick={handleAddClick}
      />
    </div>
  );
};

export default Header;

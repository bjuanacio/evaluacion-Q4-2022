import { FC } from "react";
import { Button } from "../../atoms/button/button";
import { Input } from "../../atoms/input/input";
import "./top-bar.scss";
import useAddGif from "./use-add-gif/use-add-gif";
import { Info } from "../../../../utils/enums/info";

interface TopBarProps {
  addGif: (url: string) => void;
  validUrl: boolean;
}

const TopBar: FC<TopBarProps> = ({ addGif, validUrl }) => {
  const { url, setUrl, handleAddUrl } = useAddGif();
  return (
    <div className="top-bar">
      <Input
        onChange={handleAddUrl}
        value={url}
        variant={!validUrl ? "error" : "normal"}
        errorMessage={!validUrl ? Info.ERROR_MESSAGE : ""}
        placeholder="Gift Url"
        name="addText"
      />
      <Button
        onClick={() => {
          addGif(url);
          setUrl("");
        }}
      >
        Agregar
      </Button>
    </div>
  );
};

export default TopBar;

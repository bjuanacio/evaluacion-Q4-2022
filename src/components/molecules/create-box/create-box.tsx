import "./create-box.scss";
import { FC, useContext, useState } from "react";
import Button from "../../atoms/button/button";
import Input from "../../atoms/input/input";
import { GifContext } from "../../../context/gif-context/gif-context";

interface CreateBoxProps {}

const CreateBox: FC<CreateBoxProps> = () => {
	const [inputCreate, setInputCreate] = useState("");

	const { addGif } = useContext(GifContext);

	return (
		<section className="create-box">
			<div className="create-box__input">
				<Input
					onChange={(e) => setInputCreate(e.target.value)}
					placeHolder="Gif URL"
					error={false}
					value={inputCreate}
				/>
			</div>
			<div className="create-box__button">
				<Button
					title="Agregar"
					onClick={() => addGif({ url: inputCreate })}
				/>
			</div>
		</section>
	);
};

export default CreateBox;

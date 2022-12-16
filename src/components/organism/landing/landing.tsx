import React from "react";
import Modal from "../../atoms/modal/modal";
import GifForm from "../../molecules/gif-form/gif-form";
import Add from "../../molecules/add/add";
import useLanding from "./use-landing/use-landing";
import ListCard from "../list-card/list-card";

type Props = {};

const Landing = (props: Props) => {
  const { handleChangeModal, gifList, deleteGif, activeModal } = useLanding();

  return (
    <>
      <Add handleChangeModal={handleChangeModal!} />
      <ListCard gifsList={gifList} deleteGif={deleteGif} />
    </>
  );
};

export default Landing;

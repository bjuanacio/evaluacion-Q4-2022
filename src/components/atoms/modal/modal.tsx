import { FC } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import CloseIcon from "../../../assets/delete-icon.svg";

export interface ModalProps {
  children: React.ReactNode;
  handleChangeModal?: () => void;
}

const Modal: FC<ModalProps> = ({ children, handleChangeModal }) => {
  return ReactDOM.createPortal(
    <div className="modal__background">
      <div className="modal__form">
        <img
          onClick={handleChangeModal}
          className="modal__close-icon"
          src={CloseIcon}
          alt="icon-close"
        />
        <br />
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

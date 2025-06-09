import s from "./ModalEditUser.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import Modal from "react-modal";

export default function ModalEditUser({ closeModal, openModal }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(25, 26, 21, 0.3)",
    },
    content: {
      border: "none",
      overflow: "auto",
      padding: "none",
      borderRadius: "30px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={openModal} onRequestClose={closeModal} style={customStyles}>
      <button onClick={closeModal} className={s.buttonClose}>
        <svg className={s.icon} width={24} height={24}>
          <use href={`${sprite}#icon-close`} />
        </svg>
      </button>
    </Modal>
  );
}

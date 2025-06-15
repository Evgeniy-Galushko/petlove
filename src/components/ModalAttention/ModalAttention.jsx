import Modal from "react-modal";
import s from "./ModalAttention.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import { NavLink } from "react-router-dom";

export default function ModalAttention({ isOpen, onClose }) {
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <ul className={s.modal}>
        <button onClick={onClose} className={s.buttonClose}>
          <svg className={s.icon} width={24} height={24}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <li className={s.boxImg}>
          <img src="/🐶.png" alt="" width={44} height={44} />
        </li>
        <li>
          <h3 className={s.title}>Attention</h3>
          <p className={s.messsage}>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features
          </p>
        </li>
        <li className={s.boxLink}>
          <NavLink to="/login" className={s.linkLogin}>
            Log In
          </NavLink>
          <NavLink to="/register" className={s.linkRegister}>
            Registration
          </NavLink>
        </li>
      </ul>
    </Modal>
  );
}

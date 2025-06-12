import Modal from "react-modal";
import s from "./ModalApproveAction.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signoutRequest } from "../../redux/auth/operations.js";

export default function ModalApproveAction({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(signoutRequest());
    onClose();
    navigate("/home");
  };
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
      // with: "auto",
      // height: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <ul className={s.modalApproveAction}>
        <button onClick={onClose} className={s.buttonClose}>
          <svg className={s.icon} width={24} height={24}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
        <li className={s.boxImg}>
          <img src="/🐈.png" alt="cat" className={s.img} />
        </li>
        <li>
          <h2 className={s.title}>Already leaving?</h2>
        </li>
        <li className={s.boxButton}>
          <button type="button" onClick={handleSignout} className={s.yesButton}>
            Yes
          </button>
          <button type="button" onClick={onClose} className={s.canselButton}>
            Cancel
          </button>
        </li>
      </ul>
    </Modal>
  );
}

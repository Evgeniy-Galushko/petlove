import s from "./EditUserBtn.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors.js";

export default function EditUserBtn({ setModalUser }) {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  const openModal = () => {
    setModalUser(true);
  };

  return (
    <button className={s.button} type="button" onClick={openModal}>
      {user.name ? user.name : "User"}{" "}
      <svg className={s.iconUser}>
        <use href={`${sprite}#icon-user-white`} />
      </svg>
    </button>
  );
}

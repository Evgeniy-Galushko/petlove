import s from "./EditUserBtn.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/selectors.js";

export default function EditUserBtn({ setModalUser }) {
  const user = useSelector(selectCurrentUser);
  // console.log(user);
  const openModal = () => {
    setModalUser(true);
  };

  return (
    <ul className={s.editUserBtn}>
      <li className={s.boxNameIcon}>
        <p className={s.name}>{user.name ? user.name : "User"}</p>
        <svg className={s.iconUser}>
          <use href={`${sprite}#icon-user-white`} />
        </svg>
      </li>
      <li>
        <button className={s.button} type="button" onClick={openModal}>
          <svg width={18} height={18}>
            <use href={`${sprite}#icon-pencil`} />
          </svg>
        </button>
      </li>
    </ul>
  );
}

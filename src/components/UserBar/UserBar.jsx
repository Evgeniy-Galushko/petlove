import { NavLink } from "react-router-dom";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./UserBar.module.css";

export default function UserBar() {
  return (
    <NavLink to="/profile" className={s.link}>
      <div className={s.user}>
        <svg className={s.iconUser}>
          <use href={`${sprite}#icon-user`} />
        </svg>
      </div>
      <p className={s.name}>Name</p>
    </NavLink>
  );
}

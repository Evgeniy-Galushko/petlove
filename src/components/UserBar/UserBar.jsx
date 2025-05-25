import { NavLink, useLocation } from "react-router-dom";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./UserBar.module.css";
import clsx from "clsx";

export default function UserBar() {
  const location = useLocation();

  return (
    <NavLink to="/profile" className={s.link}>
      <div className={s.user}>
        <svg className={s.iconUser}>
          <use href={`${sprite}#icon-user`} />
        </svg>
      </div>
      <p
        className={clsx(
          s.name,
          location.pathname === "/home" ? s.nameYellow : s.nameWhite
        )}
      >
        Name
      </p>
    </NavLink>
  );
}

import s from "./MainLayoutPage.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import { NavLink } from "react-router-dom";

export default function MainLayoutPage() {
  return (
    <div className={s.boxImg}>
      <NavLink to="/home" className={s.title}>
        petl
        <svg className={s.titleIcon}>
          <use href={`${sprite}#icon-heart-circle`} />
        </svg>
        ve
      </NavLink>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./Logo.module.css";
import clsx from "clsx";

export default function Logo({ style }) {
  return (
    <NavLink to="/home" className={s.logo}>
      petl
      <svg
        className={clsx(
          s.logoIcon,
          style === "white" ? s.logoIcon : s.logoIconYellow
        )}
      >
        <use href={`${sprite}#icon-heart-circle`} />
      </svg>
      ve
    </NavLink>
  );
}

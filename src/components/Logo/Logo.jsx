import { NavLink, useLocation } from "react-router-dom";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./Logo.module.css";
import clsx from "clsx";

export default function Logo() {
  const location = useLocation();

  return (
    <NavLink
      to="/home"
      className={clsx(
        s.logo,
        location.pathname === "/home" ? s.linkLogoYellow : s.linkLogoWhite
      )}
    >
      petl
      <svg
        className={clsx(
          s.logoIcon,
          location.pathname === "/home" ? s.logoIcon : s.logoIconYellow
        )}
      >
        <use href={`${sprite}#icon-heart-circle`} />
      </svg>
      ve
    </NavLink>
  );
}

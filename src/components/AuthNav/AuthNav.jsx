import { NavLink, useLocation } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  return (
    <div className={s.boxAuthNav}>
      <NavLink to="/login" className={clsx(s.link, s.linkLogin)}>
        Log In
      </NavLink>
      <NavLink to="/register" className={clsx(s.link, s.linkRegister)}>
        Registration
      </NavLink>
    </div>
  );
}

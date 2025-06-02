import clsx from "clsx";
import s from "./Nav.module.css";

import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  const buildLinkClass = ({ isActive }) => {
    return clsx(
      s.link,
      isActive
        ? s.active
        : location.pathname === "/home"
        ? s.linkNavBCYellow
        : s.linkNavBCWhite
    );
  };

  return (
    <div className={s.boxNav}>
      <NavLink to="/news" className={buildLinkClass}>
        News
      </NavLink>
      <NavLink to="/notices" className={buildLinkClass}>
        Find pet
      </NavLink>
      <NavLink to="/friends" className={buildLinkClass}>
        Our friends
      </NavLink>
    </div>
  );
}

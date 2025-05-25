import clsx from "clsx";
import s from "./Nav.module.css";

import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <div className={s.boxNav}>
      <NavLink
        to="/news"
        className={clsx(
          s.link,
          location.pathname === "/home" ? s.linkNavBCYellow : s.linkNavBCWhite
        )}
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        className={clsx(
          s.link,
          location.pathname === "/home" ? s.linkNavBCYellow : s.linkNavBCWhite
        )}
      >
        Find pet
      </NavLink>
      <NavLink
        to="/friends"
        className={clsx(
          s.link,
          location.pathname === "/home" ? s.linkNavBCYellow : s.linkNavBCWhite
        )}
      >
        Our friends
      </NavLink>
    </div>
  );
}

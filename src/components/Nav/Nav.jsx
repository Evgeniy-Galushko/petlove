import s from "./Nav.module.css";

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className={s.boxNav}>
      <NavLink to="/news" className={s.link}>
        News
      </NavLink>
      <NavLink to="/notices" className={s.link}>
        Find pet
      </NavLink>
      <NavLink to="/friends" className={s.link}>
        Our friends
      </NavLink>
    </div>
  );
}

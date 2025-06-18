import { Suspense } from "react";
import s from "./MyNotices.module.css";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

export default function MyNotices() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <ul className={s.myNotices}>
      <li className={s.boxNav}>
        <NavLink to="/profile/favorites" className={buildLinkClass}>
          My favorite pets
        </NavLink>
        <NavLink to="/profile/viewed" className={buildLinkClass}>
          Viewed
        </NavLink>
      </li>
      <li>
        <Suspense fallback={<div>Loading data...</div>}>
          <Outlet />
        </Suspense>
      </li>
    </ul>
  );
}

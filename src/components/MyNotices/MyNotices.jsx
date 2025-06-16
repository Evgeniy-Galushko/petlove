import { Suspense, useEffect } from "react";
import NoticesList from "../NoticesList/NoticesList.jsx";
import s from "./MyNotices.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentUserRequest } from "../../redux/auth/operations.js";
import { selectCurrentUser } from "../../redux/auth/selectors.js";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

export default function MyNotices() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

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

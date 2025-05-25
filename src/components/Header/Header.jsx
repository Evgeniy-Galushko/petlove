import Logo from "../Logo/Logo.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./Header.module.css";
import AuthNav from "../AuthNav/AuthNav.jsx";
import UserNav from "../UserNav/UserNav.jsx";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx";
import clsx from "clsx";

export default function Header() {
  const [menuWindow, setMenuWindow] = useState(false);

  const location = useLocation();
  console.log(location.pathname);

  const authorization = false;

  const handleMenuOpen = () => {
    setMenuWindow(true);
  };

  const handleMenuClose = () => {
    setMenuWindow(false);
  };

  return (
    <header className={s.header}>
      <ul className={s.sectionHeader}>
        <li>
          <Logo style={"white"} />
        </li>
        <li className={s.nav}>
          <Nav />
        </li>

        <li className={s.boxUser}>
          {authorization ? <UserNav /> : <AuthNav />}
          <button
            className={s.menuButton}
            type="button"
            onClick={handleMenuOpen}
          >
            <svg className={s.iconMenu}>
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </button>
        </li>
      </ul>
      {menuWindow && (
        <ul
          className={clsx(
            s.modalMenu,
            location.pathname === "/home"
              ? s.modalMenuColorWhite
              : s.modalMenuColorYellow
          )}
        >
          <li className={s.boxButtonClose}>
            <button
              className={s.buttonClose}
              type="button"
              onClick={handleMenuClose}
            >
              <svg className={s.iconMenuClose}>
                <use href={`${sprite}#icon-close`} />
              </svg>
            </button>
          </li>
          <li className={s.boxLink}>
            <NavLink
              to="/news"
              className={clsx(
                s.linkMenu,
                location.pathname === "/home"
                  ? s.linkMenuBCWhite
                  : s.linkMenuBCYellow
              )}
            >
              News
            </NavLink>
            <NavLink
              to="/notices"
              className={clsx(
                s.linkMenu,
                location.pathname === "/home"
                  ? s.linkMenuBCWhite
                  : s.linkMenuBCYellow
              )}
            >
              Find pet
            </NavLink>
            <NavLink
              to="/friends"
              className={clsx(
                s.linkMenu,
                location.pathname === "/home"
                  ? s.linkMenuBCWhite
                  : s.linkMenuBCYellow
              )}
            >
              Our friends
            </NavLink>
          </li>
          {authorization ? (
            <li>
              <button className={s.btnLogOut} type="button">
                Log out
              </button>
            </li>
          ) : (
            <li className={s.boxAuthNav}>
              <NavLink to="/login" className={clsx(s.linkAuthNav, s.login)}>
                Log In
              </NavLink>
              <NavLink
                to="/register"
                className={clsx(s.linkAuthNav, s.registration)}
              >
                Registration
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </header>
  );
}

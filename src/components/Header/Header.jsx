import Logo from "../Logo/Logo.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./Header.module.css";
import AuthNav from "../AuthNav/AuthNav.jsx";
import UserNav from "../UserNav/UserNav.jsx";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/selectors.js";
import { signoutRequest } from "../../redux/auth/operations.js";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction.jsx";

export default function Header() {
  const [menuWindow, setMenuWindow] = useState(false);
  const [modal, setModal] = useState(false);
  const token = useSelector(selectToken);
  const location = useLocation();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleSignout = () => {
  //   dispatch(signoutRequest());
  //   navigate("/home");
  // };

  const handleMenuOpen = () => {
    setMenuWindow(true);
  };

  const handleMenuClose = () => {
    setMenuWindow(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setMenuWindow(false);
    setModal(true);
  };

  return (
    <header className={s.header}>
      <ModalApproveAction isOpen={modal} onClose={closeModal} />
      <ul
        className={clsx(
          s.sectionHeader,
          location.pathname === "/home"
            ? s.sectionHeaderYellow
            : s.sectionHeaderWhite
        )}
      >
        <li>
          <Logo />
        </li>
        <li className={s.nav}>
          <Nav />
        </li>

        <li className={s.boxUser}>
          {token ? <UserNav openModal={openModal} /> : <AuthNav />}
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
              onClick={handleMenuClose}
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
              onClick={handleMenuClose}
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
              onClick={handleMenuClose}
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
          {token ? (
            <li>
              <button className={s.btnLogOut} type="button" onClick={openModal}>
                Log out
              </button>
            </li>
          ) : (
            <li className={s.boxAuthNav}>
              <NavLink
                to="/login"
                onClick={handleMenuClose}
                className={clsx(s.linkAuthNav, s.login)}
              >
                Log In
              </NavLink>
              <NavLink
                to="/register"
                onClick={handleMenuClose}
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

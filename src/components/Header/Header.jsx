import Logo from "../Logo/Logo.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./Header.module.css";
import AuthNav from "../AuthNav/AuthNav.jsx";
import UserNav from "../UserNav/UserNav.jsx";

export default function Header() {
  const authorization = false;

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
          {authorization ? <AuthNav /> : <UserNav />}
          <button className={s.menuButton}>
            <svg className={s.iconMenu}>
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </button>
        </li>
      </ul>
    </header>
  );
}

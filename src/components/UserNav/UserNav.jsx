import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx";
import UserBar from "../UserBar/UserBar.jsx";
import s from "./UserNav.module.css";

export default function UserNav() {
  return (
    <ul className={s.userBar}>
      <li>
        <LogOutBtn />
      </li>
      <li>
        <UserBar />
      </li>
    </ul>
  );
}

import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx";
import UserBar from "../UserBar/UserBar.jsx";
import s from "./UserNav.module.css";

export default function UserNav({ openModal }) {
  return (
    <ul className={s.userBar}>
      <li>
        <LogOutBtn openModal={openModal} />
      </li>
      <li>
        <UserBar />
      </li>
    </ul>
  );
}

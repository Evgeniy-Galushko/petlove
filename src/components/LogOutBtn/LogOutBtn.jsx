import s from "./LogOutBtn.module.css";

export default function LogOutBtn() {
  return (
    <button className={s.btnLogOut} type="button">
      Log out
    </button>
  );
}

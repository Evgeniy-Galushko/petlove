import clsx from "clsx";
import s from "./LogOutBtn.module.css";

export default function LogOutBtn({ openModal, outsideTheHeader }) {
  return (
    <button
      className={clsx(s.btnLogOut, outsideTheHeader && s.outsideTheHeader)}
      type="button"
      onClick={openModal}
    >
      Log out
    </button>
  );
}

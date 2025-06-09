import { useDispatch } from "react-redux";
import { signoutRequest } from "../../redux/auth/operations.js";
import s from "./LogOutBtn.module.css";

export default function LogOutBtn() {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signoutRequest());
  };

  return (
    <button className={s.btnLogOut} type="button" onClick={handleSignout}>
      Log out
    </button>
  );
}

import { useDispatch } from "react-redux";
import { signoutRequest } from "../../redux/auth/operations.js";
import s from "./LogOutBtn.module.css";
import { useNavigate } from "react-router-dom";

export default function LogOutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(signoutRequest());
    navigate("/home");
  };

  return (
    <button className={s.btnLogOut} type="button" onClick={handleSignout}>
      Log out
    </button>
  );
}

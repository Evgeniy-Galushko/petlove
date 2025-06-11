import { NavLink } from "react-router-dom";
import s from "./AddPet.module.css";

export default function AddPet() {
  return (
    <NavLink to="/add-pet" className={s.link}>
      Add pet +
    </NavLink>
  );
}

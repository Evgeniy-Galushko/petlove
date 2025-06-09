import EditUserBtn from "../EditUserBtn/EditUserBtn.jsx";
import s from "./UserCard.module.css";

export default function UserCard({ setModalUser }) {
  return (
    <ul>
      <li>
        <EditUserBtn setModalUser={setModalUser} />
      </li>
    </ul>
  );
}

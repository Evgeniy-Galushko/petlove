import EditUserBtn from "../EditUserBtn/EditUserBtn.jsx";
import PetsBlock from "../PetsBlock/PetsBlock.jsx";
import UserBlock from "../UserBlock/UserBlock.jsx";
import s from "./UserCard.module.css";

export default function UserCard({ setModalUser, currentUser }) {
  return (
    <ul>
      <li>
        <EditUserBtn setModalUser={setModalUser} />
      </li>
      <li>
        <UserBlock currentUser={currentUser} />
      </li>
      <li>
        <PetsBlock currentUser={currentUser} />
      </li>
    </ul>
  );
}

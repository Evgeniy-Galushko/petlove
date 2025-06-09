import s from "./ProfilePage.module.css";
import UserCard from "../../components/UserCard/UserCard.jsx";
import ModalEditUser from "../../components/ModalEditUser/ModalEditUser.jsx";
import { useState } from "react";

export default function ProfilePage() {
  const [modalUser, setModalUser] = useState(false);

  const closeModal = () => {
    setModalUser(false);
  };
  return (
    <section className={s.sectionProfile}>
      <ul className={s.profileBox}>
        <li>
          <UserCard setModalUser={setModalUser} />
          <ModalEditUser closeModal={closeModal} openModal={modalUser} />
        </li>
        <li>
          <h1>ProfilePage</h1>
        </li>
      </ul>
    </section>
  );
}

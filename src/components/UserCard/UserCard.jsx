import EditUserBtn from "../EditUserBtn/EditUserBtn.jsx";
import PetsBlock from "../PetsBlock/PetsBlock.jsx";
import UserBlock from "../UserBlock/UserBlock.jsx";
import s from "./UserCard.module.css";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction.jsx";
import LogOutBtn from "../LogOutBtn/LogOutBtn.jsx";

export default function UserCard({
  setModalUser,
  currentUser,
  setModal,
  modal,
}) {
  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };
  return (
    <ul className={s.userCard}>
      <ModalApproveAction isOpen={modal} onClose={closeModal} />
      <li>
        <EditUserBtn setModalUser={setModalUser} />
        <UserBlock currentUser={currentUser} />
      </li>
      <li>
        <PetsBlock currentUser={currentUser} />
      </li>
      <li>
        <LogOutBtn openModal={openModal} outsideTheHeader={true} />
      </li>
    </ul>
  );
}

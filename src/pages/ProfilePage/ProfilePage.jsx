import s from "./ProfilePage.module.css";
import UserCard from "../../components/UserCard/UserCard.jsx";
import ModalEditUser from "../../components/ModalEditUser/ModalEditUser.jsx";
import { useEffect, useState } from "react";
import { selectCurrentUser, selectToken } from "../../redux/auth/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUserRequest } from "../../redux/auth/operations.js";

export default function ProfilePage() {
  const [modalUser, setModalUser] = useState(false);
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(currentUserRequest());
    if (!token) {
      navigate("/home");
    }
  }, [dispatch, token]);

  const closeModal = () => {
    setModalUser(false);
  };
  return (
    <section className={s.sectionProfile}>
      <ul className={s.profileBox}>
        <li>
          <UserCard setModalUser={setModalUser} />
          <ModalEditUser
            closeModal={closeModal}
            openModal={modalUser}
            currentUser={currentUser}
          />
        </li>
        <li>
          <h1>ProfilePage</h1>
        </li>
      </ul>
    </section>
  );
}

import s from "./ProfilePage.module.css";
import UserCard from "../../components/UserCard/UserCard.jsx";
import ModalEditUser from "../../components/ModalEditUser/ModalEditUser.jsx";
import { useEffect, useState } from "react";
import {
  selectCurrentUser,
  selectIsLoadin,
  selectToken,
} from "../../redux/auth/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUserRequest } from "../../redux/auth/operations.js";
import { Toaster } from "react-hot-toast";
import { RingLoader } from "react-spinners";
import MyNotices from "../../components/MyNotices/MyNotices.jsx";

export default function ProfilePage() {
  const [modalUser, setModalUser] = useState(false);
  const [modal, setModal] = useState(false);
  const [avatarImg, setAvatarImg] = useState("");
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoadin);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(currentUserRequest());
    if (!token) {
      navigate("/home");
    }
  }, [token, dispatch]);

  const closeModal = () => {
    setAvatarImg("");
    setModalUser(false);
  };

  return (
    <section className={s.sectionProfile}>
      <Toaster
        toastOptions={{
          className: "",
          duration: 4000,
          style: {},
        }}
      />
      {isLoading ? (
        <RingLoader color="#f6b83d" className={s.spinners} size={70} />
      ) : (
        <ul className={s.profileBox}>
          <li className={s.userCard}>
            <ModalEditUser
              setAvatarImg={setAvatarImg}
              avatarImg={avatarImg}
              closeModal={closeModal}
              openModal={modalUser}
              currentUser={currentUser}
              // setChangeRequest={setChangeRequest}
            />
            <UserCard
              setModalUser={setModalUser}
              currentUser={currentUser}
              setModal={setModal}
              modal={modal}
            />
          </li>
          <li className={s.myNotices}>
            <MyNotices />
          </li>
        </ul>
      )}
    </section>
  );
}

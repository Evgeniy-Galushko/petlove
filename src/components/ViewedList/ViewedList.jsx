import { useDispatch, useSelector } from "react-redux";
import ModalAttention from "../ModalAttention/ModalAttention.jsx";
import ModalNotice from "../ModalNotice/ModalNotice.jsx";
import s from "./ViewedList.module.css";
import { selectdFriend } from "../../redux/notices/selectors.js";
import { selectCurrentUser, selectToken } from "../../redux/auth/selectors.js";
import { useState } from "react";
import NoticesItem from "../NoticesItem/NoticesItem.jsx";
import {
  requestAddFriend,
  requestDeleteFriend,
} from "../../redux/notices/operations.js";

export default function ViewedList() {
  const [isModalAttention, setIsModalAttention] = useState(false);
  const [isModaOneFriend, setIsModalOneFriend] = useState(false);
  const friend = useSelector(selectdFriend);
  const currentUser = useSelector(selectCurrentUser);
  const token = useSelector(selectToken);
  const data = currentUser.noticesViewed;
  const dispatch = useDispatch();
  if (!data) return;
  // console.log(currentUser);

  const closeModalAttention = () => {
    setIsModalAttention(false);
  };

  const closeModalOneFriend = () => {
    setIsModalOneFriend(false);
  };

  const handleClickAdd = (id) => {
    dispatch(requestAddFriend(id));
  };

  const handleClickDelete = (id) => {
    dispatch(requestDeleteFriend(id));
  };

  return (
    <ul className={s.noticesList}>
      {friend && (
        <ModalNotice
          isOpen={isModaOneFriend}
          onClose={closeModalOneFriend}
          friend={friend}
          handleClickAdd={handleClickAdd}
          handleClickDelete={handleClickDelete}
        />
      )}
      <ModalAttention isOpen={isModalAttention} onClose={closeModalAttention} />
      {data.map(
        ({
          _id,
          imgURL,
          title,
          name,
          birthday,
          sex,
          species,
          category,
          comment,
          price,
          popularity,
        }) => {
          return (
            <li key={_id} className={s.oneCard}>
              <NoticesItem
                id={_id}
                imgURL={imgURL}
                title={title}
                name={name}
                birthday={birthday}
                gender={sex}
                species={species}
                category={category}
                comment={comment}
                price={price}
                popularity={popularity}
                setIsModal={token ? setIsModalOneFriend : setIsModalAttention}
                favorites={true}
                boxFavorite={false}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}

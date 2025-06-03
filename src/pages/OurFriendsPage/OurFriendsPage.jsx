import { useDispatch, useSelector } from "react-redux";
import Title from "../../components/Title/Title.jsx";
import s from "./OurFriendsPage.module.css";
import {
  selectFriends,
  selectIsLoadin,
} from "../../redux/friends/selectors.js";
import { RingLoader } from "react-spinners";
import FriendsList from "../../components/FriendsList/FriendsList.jsx";
import { useEffect } from "react";
import { requestFriends } from "../../redux/friends/operations.js";

export default function OurFriendsPage() {
  const dispatch = useDispatch();
  const friendsData = useSelector(selectFriends);
  const isLoading = useSelector(selectIsLoadin);

  // console.log(friendsData);

  useEffect(() => {
    dispatch(requestFriends());
  }, [dispatch]);

  return (
    <section className={s.sectionFriends}>
      <ul>
        <li>
          <Title>Our friends</Title>
        </li>
        {isLoading ? (
          <RingLoader color="#f6b83d" className={s.spinners} size={70} />
        ) : (
          <li>
            <FriendsList friendsData={friendsData} />
          </li>
        )}
      </ul>
    </section>
  );
}

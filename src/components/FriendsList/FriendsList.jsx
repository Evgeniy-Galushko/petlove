import FriendsItem from "../FriendsItem/FriendsItem.jsx";
import s from "./FriendsList.module.css";

export default function FriendsList({ friendsData }) {
  return (
    <ul className={s.friendsBox}>
      {friendsData.map(
        ({
          _id,
          address,
          email,
          imageUrl,

          addressUrl,
          phone,
          title,
          url,
          workDays,
        }) => {
          return (
            <li key={_id} className={s.oneCard}>
              <FriendsItem
                address={address}
                email={email}
                imageUrl={imageUrl}
                addressUrl={addressUrl}
                phone={phone}
                title={title}
                url={url}
                workDays={workDays}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}

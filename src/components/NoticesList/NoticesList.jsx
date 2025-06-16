import NoticesItem from "../NoticesItem/NoticesItem.jsx";
import s from "./NoticesList.module.css";

export default function NoticesList({ data, setIsModal, setIdOneFriend }) {
  if (!data) return;

  return (
    <ul className={s.noticesList}>
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
                setIsModal={setIsModal}
                boxFavorite={true}
              />
            </li>
          );
        }
      )}
    </ul>
  );
}

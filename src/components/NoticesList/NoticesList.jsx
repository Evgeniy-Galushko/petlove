import NoticesItem from "../NoticesItem/NoticesItem.jsx";
import s from "./NoticesList.module.css";

export default function NoticesList({ data }) {
  if (!data) return;

  console.log(data);

  return (
    <ul>
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
              />
            </li>
          );
        }
      )}
    </ul>
  );
}

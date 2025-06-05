import NewsItem from "../NewsItem/NewsItem.jsx";
import s from "./NewsList.module.css";

export default function NewsList({ newsData }) {
  if (!newsData) return;

  return (
    <ul className={s.newsList}>
      {newsData.map(({ date, _id, imgUrl, text, title, url }) => {
        return (
          <li key={_id} className={s.oneCard}>
            <NewsItem
              date={date}
              imgUrl={imgUrl}
              text={text}
              title={title}
              url={url}
            />
          </li>
        );
      })}
    </ul>
  );
}

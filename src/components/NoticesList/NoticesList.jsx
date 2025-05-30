import s from "./NoticesList.module.css";

export default function NoticesList({ newsData }) {
  if (!newsData) return;

  return (
    <ul>
      {newsData.map(({ date, _id, imgUrl, text, title, url }) => {
        return (
          <li key={_id}>
            <img src={imgUrl} alt={title} />
            <h2>{}title</h2>
            <p>{text}</p>
            <ul>
              <li>
                <p>{date}</p>
              </li>
              <li>
                <a href={url} target="blank">
                  Read more
                </a>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

import s from "./NewsItem.module.css";

export default function NewsItem({ date, imgUrl, text, title, url }) {
  return (
    <>
      <img src={imgUrl} alt={title} className={s.img} />
      <h2 className={s.title}>{title}</h2>
      <p className={s.paragraph}>{text}</p>
      <ul className={s.boxDateaLink}>
        <li>
          <p className={s.paragraphDate}>
            {date.slice(8, 10)}/{date.slice(5, 7)}/{date.slice(0, 4)}
          </p>
        </li>
        <li>
          <a href={url} target="blank" className={s.link}>
            Read more
          </a>
        </li>
      </ul>
    </>
  );
}

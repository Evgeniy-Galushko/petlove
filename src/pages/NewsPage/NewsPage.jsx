import s from "./NewsPage.module.css";
import Title from "../../components/Title/Title.jsx";
import SearchField from "../../components/SearchField/SearchField.jsx";

export default function NewsPage() {
  return (
    <section className={s.sectionNews}>
      <ul>
        <li>
          <Title>News</Title>
          <SearchField />
        </li>
      </ul>
    </section>
  );
}

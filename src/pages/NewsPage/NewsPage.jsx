import s from "./NewsPage.module.css";
import Title from "../../components/Title/Title.jsx";
import SearchField from "../../components/SearchField/SearchField.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../../redux/news/selectors.js";
import { useEffect } from "react";
import { requestNews } from "../../redux/news/operations.js";
import NoticesList from "../../components/NoticesList/NoticesList.jsx";

export default function NewsPage() {
  const dispatch = useDispatch();
  const newsData = useSelector(selectNews);
  // console.log(newsData.results);

  useEffect(() => {
    dispatch(requestNews());
  }, [dispatch]);

  return (
    <section className={s.sectionNews}>
      <ul>
        <li>
          <Title>News</Title>
          <SearchField />
          <NoticesList newsData={newsData.results} />
        </li>
      </ul>
    </section>
  );
}

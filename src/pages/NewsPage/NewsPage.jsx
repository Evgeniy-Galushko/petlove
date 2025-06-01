import s from "./NewsPage.module.css";
import Title from "../../components/Title/Title.jsx";
import SearchField from "../../components/SearchField/SearchField.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../../redux/news/selectors.js";
import { useEffect, useState } from "react";
import { requestNews } from "../../redux/news/operations.js";
import NoticesList from "../../components/NoticesList/NoticesList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { PaginationButton } from "../../utils/pagination_button.js";

export default function NewsPage() {
  const [numberOfPages, setNumberOfPages] = useState([]);
  // const [totalPages, setTotalPages] = useState(null);
  const [toPage, setToPage] = useState(null);
  console.log(toPage);

  const dispatch = useDispatch();
  const newsData = useSelector(selectNews);
  const page = PaginationButton(newsData.totalPages);
  // setNumberOfPages(PaginationButton(newsData.totalPages));
  console.log(page);

  console.log(numberOfPages);

  useEffect(() => {
    dispatch(requestNews());
    setNumberOfPages(page);
  }, [dispatch, toPage]);

  return (
    <section className={s.sectionNews}>
      <ul>
        <li className={s.titleAndSearch}>
          <Title>News</Title>
          <SearchField />
        </li>
        <li className={s.noticesList}>
          <NoticesList newsData={newsData.results} />
        </li>
        <li className={s.pagination}>
          {newsData.totalPages > 1 && (
            <Pagination
              numberOfPages={numberOfPages}
              totalPages={newsData.totalPages}
              setToPage={setToPage}
            />
          )}
        </li>
      </ul>
    </section>
  );
}

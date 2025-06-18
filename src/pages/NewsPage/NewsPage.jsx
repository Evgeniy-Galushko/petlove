import s from "./NewsPage.module.css";
import Title from "../../components/Title/Title.jsx";
import SearchField from "../../components/SearchField/SearchField.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoadin, selectNews } from "../../redux/news/selectors.js";
import { useEffect, useState } from "react";
import { requestNews } from "../../redux/news/operations.js";
import NoticesList from "../../components/NewsList/NewsList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { PaginationButton } from "../../utils/pagination_button.js";
import { RingLoader } from "react-spinners";

export default function NewsPage() {
  const [request, setRequest] = useState("");
  const [toPage, setToPage] = useState(1);
  const dispatch = useDispatch();
  const newsData = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoadin);
  const page = PaginationButton(newsData.totalPages);

  useEffect(() => {
    dispatch(requestNews({ toPage: toPage, request: request }));
  }, [dispatch, toPage, request]);

  return (
    <section className={s.sectionNews}>
      {isLoading ? (
        <RingLoader color="#f6b83d" className={s.spinners} size={70} />
      ) : (
        <ul>
          <li className={s.titleAndSearch}>
            <Title>News</Title>
            <SearchField setRequest={setRequest} />
          </li>

          <li className={s.noticesList}>
            <NoticesList newsData={newsData.results} />
          </li>

          <li className={s.pagination}>
            {newsData.totalPages > 1 && (
              <Pagination
                numberOfPages={page}
                totalPages={newsData.totalPages}
                setToPage={setToPage}
                toPage={toPage}
              />
            )}
          </li>
        </ul>
      )}
    </section>
  );
}

import s from "./NoticesPage.module.css";
import Title from "../../components/Title/Title.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCategories,
  requestGender,
  requestNotices,
  requestSpecies,
} from "../../redux/notices/operations.js";
import {
  selectCategories,
  selectGender,
  selectNotices,
  selectSpecies,
} from "../../redux/notices/selectors.js";
import { PaginationButton } from "../../utils/pagination_button.js";
import SearchFieldNotices from "../../components/SearchFieldNotices/SearchFieldNotices.jsx";

export default function NoticesPage() {
  const [toPage, setToPage] = useState(1);
  const [request, setRequest] = useState({});
  const [popularity, setPopularity] = useState();
  const [price, setPrice] = useState();

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const gender = useSelector(selectGender);
  const species = useSelector(selectSpecies);
  const notices = useSelector(selectNotices);
  const page = PaginationButton(notices.totalPages);

  // console.log(categories);
  // console.log(gender);
  // console.log(species);
  console.log(notices);
  // console.log(toPage);

  useEffect(() => {
    dispatch(requestNotices({ page: toPage }));
    dispatch(requestCategories());
    dispatch(requestGender());
    dispatch(requestSpecies());
  }, [dispatch, toPage]);

  return (
    <section className={s.sectionNotices}>
      <ul className={s.notices}>
        <li>
          <Title>Find your favorite pet</Title>
        </li>
        <li className={s.boxFilters}>
          <SearchFieldNotices
            setRequest={setRequest}
            categories={categories}
            gender={gender}
            species={species}
            setPrice={setPrice}
            price={price}
            setPopularity={setPopularity}
            popularity={popularity}
          />
        </li>
        <li>
          <Pagination
            numberOfPages={page}
            totalPages={notices.totalPages}
            setToPage={setToPage}
            toPage={toPage}
          />
        </li>
      </ul>
    </section>
  );
}

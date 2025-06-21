import s from "./NoticesPage.module.css";
import Title from "../../components/Title/Title.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestAddFriend,
  requestCategories,
  requestCitiesLocation,
  requestDeleteFriend,
  requestGender,
  requestNotices,
  requestSpecies,
} from "../../redux/notices/operations.js";
import {
  selectCategories,
  selectCitiesLocation,
  selectdFriend,
  selectGender,
  selectIsLoadin,
  selectNotices,
  selectSpecies,
} from "../../redux/notices/selectors.js";
import { PaginationButton } from "../../utils/pagination_button.js";
import SearchFieldNotices from "../../components/SearchFieldNotices/SearchFieldNotices.jsx";
import NoticesList from "../../components/NoticesList/NoticesList.jsx";
import ModalAttention from "../../components/ModalAttention/ModalAttention.jsx";
import { selectToken } from "../../redux/auth/selectors.js";
import ModalNotice from "../../components/ModalNotice/ModalNotice.jsx";
import { Toaster } from "react-hot-toast";
import { RingLoader } from "react-spinners";
import {
  selectCategory,
  selectGenders,
  selectLocationId,
  selectPopularity,
  selectPrice,
  selectRequest,
  selectSpecie,
} from "../../redux/filters/selectors.js";

export default function NoticesPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toPage, setToPage] = useState(1);
  const [isModalAttention, setIsModalAttention] = useState(false);
  const [isModaOneFriend, setIsModalOneFriend] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const genders = useSelector(selectGender);
  const species = useSelector(selectSpecies);
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoadin);
  const citiesLocation = useSelector(selectCitiesLocation);
  const page = PaginationButton(notices.totalPages);
  const token = useSelector(selectToken);
  const friend = useSelector(selectdFriend);
  const request = useSelector(selectRequest);
  const category = useSelector(selectCategory);
  const gender = useSelector(selectGenders);
  const specie = useSelector(selectSpecie);
  const locationId = useSelector(selectLocationId);
  const popularity = useSelector(selectPopularity);
  const price = useSelector(selectPrice);

  // console.log(locationId.value);

  useEffect(() => {
    dispatch(
      requestNotices({
        page: toPage,
        byPopularity: popularity,
        byPrice: price,
        keyword: request,
        category: category,
        species: specie,
        locationId: locationId.value,
        sex: gender,
      })
    );
    // dispatch(requestIdFriend(idOneFriend));
    dispatch(requestCategories());
    dispatch(requestGender());
    dispatch(requestSpecies());
    dispatch(requestCitiesLocation());

    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [
    dispatch,
    request,
    gender,
    specie,
    locationId,
    category,
    toPage,
    price,
    popularity,
  ]);

  const closeModalAttention = () => {
    setIsModalAttention(false);
  };

  const closeModalOneFriend = () => {
    setIsModalOneFriend(false);
  };

  const handleClickAdd = (id) => {
    dispatch(requestAddFriend(id));
    closeModalOneFriend();
  };

  const handleClickDelete = (id) => {
    dispatch(requestDeleteFriend(id));
    closeModalOneFriend();
  };

  return (
    <section className={s.sectionNotices}>
      <Toaster
        toastOptions={{
          className: "",
          duration: 4000,
          style: {},
        }}
      />
      {friend && (
        <ModalNotice
          isOpen={isModaOneFriend}
          onClose={closeModalOneFriend}
          friend={friend}
          handleClickAdd={handleClickAdd}
          handleClickDelete={handleClickDelete}
        />
      )}
      <ModalAttention isOpen={isModalAttention} onClose={closeModalAttention} />
      {isLoading ? (
        <RingLoader color="#f6b83d" className={s.spinners} size={70} />
      ) : (
        <ul className={s.notices}>
          <li>
            <Title>Find your favorite pet</Title>
          </li>
          <li className={s.boxFilters}>
            <SearchFieldNotices
              categories={categories}
              genders={genders}
              species={species}
              citiesLocation={citiesLocation}
              windowWidth={windowWidth}
            />
          </li>
          <li>
            <NoticesList
              data={notices.results}
              setIsModal={token ? setIsModalOneFriend : setIsModalAttention}
            />
          </li>
          <li>
            {notices.totalPages > 1 && (
              <Pagination
                numberOfPages={page}
                totalPages={notices.totalPages}
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

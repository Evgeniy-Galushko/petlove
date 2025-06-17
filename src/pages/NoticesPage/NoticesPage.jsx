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
  requestIdFriend,
  requestNotices,
  requestSpecies,
} from "../../redux/notices/operations.js";
import {
  selectCategories,
  selectCitiesLocation,
  selectdFriend,
  selectGender,
  selectIdFavorites,
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

export default function NoticesPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toPage, setToPage] = useState(1);
  const [request, setRequest] = useState({});
  const [category, setCategory] = useState("");
  const [genders, setGenders] = useState("");
  const [specie, setSpecie] = useState("");
  const [locationId, setLocationId] = useState("");
  const [popularity, setPopularity] = useState(null);
  const [price, setPrice] = useState(null);
  const [isModalAttention, setIsModalAttention] = useState(false);
  const [isModaOneFriend, setIsModalOneFriend] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const gender = useSelector(selectGender);
  const species = useSelector(selectSpecies);
  const notices = useSelector(selectNotices);
  const citiesLocation = useSelector(selectCitiesLocation);
  const page = PaginationButton(notices.totalPages);
  const token = useSelector(selectToken);
  const friend = useSelector(selectdFriend);

  // console.log(friend);

  useEffect(() => {
    dispatch(
      requestNotices({
        page: toPage,
        byPopularity: popularity,
        byPrice: price,
        keyword: request.request,
        category: category,
        species: specie,
        locationId: locationId.value,
        sex: genders,
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
    genders,
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
  };

  const handleClickDelete = (id) => {
    dispatch(requestDeleteFriend(id));
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
            setCategory={setCategory}
            citiesLocation={citiesLocation}
            setGenders={setGenders}
            setSpecie={setSpecie}
            setLocationId={setLocationId}
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
    </section>
  );
}

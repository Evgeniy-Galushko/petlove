import s from "./Pagination.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import clsx from "clsx";
// import { number } from "yup";

export default function Pagination({ numberOfPages, totalPages, setToPage }) {
  if (!numberOfPages) return;

  const button = numberOfPages.map((number, index) => {
    return (
      <button key={index} className={s.buttonNumber}>
        {number}
      </button>
    );
  });

  // console.log(totalPages);

  const hendleClick = (e) => {
    console.log(e.target);
  };

  const goToFirstPage = () => {
    setToPage(1);
  };
  const goToPrev = () => {
    setToPage((prev) => Math.max(prev - 1, 1));
  };
  const goToNext = () => {
    setToPage((prev) => Math.min(prev + 1, totalPages));
  };
  const goToLastPage = () => {
    setToPage(totalPages);
  };

  return (
    <ul className={s.pagination}>
      <li className={s.arrows}>
        <button
          type="button"
          className={clsx(s.buttonTwo, s.rotate)}
          onClick={goToFirstPage}
        >
          <svg className={s.iconOne}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
          <svg className={s.iconTwo}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </button>
        <button
          type="button"
          className={clsx(s.buttonOne, s.rotate)}
          onClick={goToPrev}
        >
          <svg className={s.icon}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </button>
      </li>

      <li className={s.buttonNumBox}>
        {button.slice(0, 2)}
        {button.length > 1 && <button className={s.buttonNumber}>...</button>}
      </li>

      <li className={s.arrows}>
        <button type="button" className={s.buttonOne} onClick={goToNext}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </button>
        <button type="button" className={s.buttonTwo} onClick={goToLastPage}>
          <svg className={s.iconOne}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
          <svg className={s.iconTwo}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </button>
      </li>
    </ul>
  );
}

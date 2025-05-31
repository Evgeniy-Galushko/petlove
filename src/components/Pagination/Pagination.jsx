import s from "./Pagination.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import clsx from "clsx";

export default function Pagination() {
  return (
    <ul className={s.pagination}>
      <li className={s.arrows}>
        <button type="button" className={clsx(s.buttonOne, s.rotate)}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </button>
        <button type="button" className={clsx(s.buttonTwo, s.rotate)}>
          <svg className={s.iconOne}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
          <svg className={s.iconTwo}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </button>
      </li>

      <li className={s.buttonNumBox}>
        <button className={s.buttonNumber}>1</button>
        <button className={s.buttonNumber}>2</button>
        <button className={s.buttonNumber}>...</button>
      </li>

      <li className={s.arrows}>
        <button type="button" className={s.buttonOne}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </button>
        <button type="button" className={s.buttonTwo}>
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

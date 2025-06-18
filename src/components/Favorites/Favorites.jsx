import { useState } from "react";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./Favorites.module.css";
import { useDispatch } from "react-redux";

export default function Favorites({ id, openModal }) {
  const [favorites, setFavorites] = useState(false);
  const dispatch = useDispatch();

  const handlChange = (evt) => {
    setFavorites(evt.target.checked);
    // dispatch(requestFavoritetСarId(id));
  };
  return (
    <div className={s.favorites}>
      <input
        className={s.input}
        id={id}
        type="checkbox"
        onChange={handlChange}
        checked={favorites}
        onClick={openModal}
      />
      <label htmlFor={id} className={s.label}>
        {favorites ? (
          <svg className={s.iconHeart}>
            <use href={`${sprite}#icon-basket`} />
          </svg>
        ) : (
          <svg className={s.iconHeart}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        )}
      </label>
    </div>
  );
}

import s from "./NoticesItem.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import clsx from "clsx";
import Favorites from "../Favorites/Favorites.jsx";
import { useState } from "react";

export default function NoticesItem({
  id,
  imgURL,
  title,
  name,
  birthday,
  gender,
  species,
  category,
  comment,
  price,
  popularity,
  setIsModal,
}) {
  const openModal = () => {
    setIsModal(true);
  };

  return (
    <>
      <img src={imgURL} alt={name} width={287} className={s.img} />
      <div>
        <div className={s.boxTitlePopular}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.popularity}>
            <svg className={clsx(s.icon)} width={16} height={16}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            {popularity}
          </p>
        </div>

        <ul className={s.boxCharacteristics}>
          <li>
            <p className={s.description}>Name</p>
            <p className={s.meaning}>{name}</p>
          </li>
          <li>
            <p className={s.description}>Birthday</p>
            <p className={s.meaning}>
              {birthday.slice(8, 10)}.{birthday.slice(5, 7)}.
              {birthday.slice(0, 4)}
            </p>
          </li>
          <li>
            <p className={s.description}>Gender</p>
            <p className={s.meaning}>{gender}</p>
          </li>
          <li>
            <p className={s.description}>Species</p>
            <p className={s.meaning}>{species}</p>
          </li>
          <li>
            <p className={s.description}>Category</p>
            <p className={s.meaning}>{category}</p>
          </li>
        </ul>
        <p className={s.comment}>{comment}</p>
        {!price ? (
          <p className={s.price}>No price</p>
        ) : (
          <p className={s.price}>&#x24;{price}</p>
        )}
      </div>
      <ul className={s.boxButtonAndFavorite}>
        <li>
          <button
            type="button"
            className={s.buttonLearnMore}
            onClick={openModal}
          >
            Learn more
          </button>
        </li>
        <li className={s.favorites}>
          <Favorites id={id} />
        </li>
      </ul>
    </>
  );
}

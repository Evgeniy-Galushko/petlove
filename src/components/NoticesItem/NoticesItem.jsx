import s from "./NoticesItem.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import clsx from "clsx";
import {
  requestAddFriend,
  requestDeleteFriend,
  requestIdFriend,
} from "../../redux/notices/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/selectors.js";
import { selectIdFavorites } from "../../redux/notices/selectors.js";

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
  favorites,
  boxFavorite,
}) {
  const token = useSelector(selectToken);
  const idFavorites = useSelector(selectIdFavorites);
  const dispatch = useDispatch();

  const openModalFriend = (id) => {
    setIsModal(true);
    dispatch(requestIdFriend(id));
  };

  const buttonFavorite = idFavorites.some((idFavorit) => idFavorit === id);

  const openModal = () => {
    setIsModal(true);
  };

  const handleClickAdd = (id) => {
    dispatch(requestAddFriend(id));
  };

  const handleClickDelete = (id) => {
    dispatch(requestDeleteFriend(id));
  };

  return (
    <>
      <img
        src={imgURL}
        alt={name}
        width={287}
        className={clsx(s.img, favorites && s.imgFav)}
      />
      <div>
        <div className={s.boxTitlePopular}>
          <h2 className={clsx(s.title, favorites && s.titleFav)}>{title}</h2>
          <p className={s.popularity}>
            <svg className={clsx(s.icon)} width={16} height={16}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            {popularity}
          </p>
        </div>

        <ul className={s.boxCharacteristics}>
          <li>
            <p
              className={clsx(s.description, favorites && s.descriptionFavorit)}
            >
              Name
            </p>
            <p className={clsx(s.meaning, favorites && s.meaningFavorit)}>
              {name}
            </p>
          </li>
          <li>
            <p
              className={clsx(s.description, favorites && s.descriptionFavorit)}
            >
              Birthday
            </p>
            {birthday ? (
              <p className={clsx(s.meaning, favorites && s.meaningFavorit)}>
                {birthday.slice(8, 10)}.{birthday.slice(5, 7)}.
                {birthday.slice(0, 4)}
              </p>
            ) : (
              <p className={clsx(s.meaning, favorites && s.meaningFavorit)}>
                No birthday
              </p>
            )}
          </li>
          <li>
            <p
              className={clsx(s.description, favorites && s.descriptionFavorit)}
            >
              Gender
            </p>
            <p className={clsx(s.meaning, favorites && s.meaningFavorit)}>
              {gender}
            </p>
          </li>
          <li>
            <p
              className={clsx(s.description, favorites && s.descriptionFavorit)}
            >
              Species
            </p>
            <p className={clsx(s.meaning, favorites && s.meaningFavorit)}>
              {species}
            </p>
          </li>
          <li>
            <p
              className={clsx(s.description, favorites && s.descriptionFavorit)}
            >
              Category
            </p>
            <p className={clsx(s.meaning, favorites && s.meaningFavorit)}>
              {category}
            </p>
          </li>
        </ul>
        <p className={clsx(s.comment, favorites && s.commentFav)}>{comment}</p>
        {!price ? (
          <p className={clsx(s.price, favorites && s.priceFav)}>No price</p>
        ) : (
          <p className={clsx(s.price, favorites && s.priceFav)}>
            &#x24;{price}
          </p>
        )}
      </div>
      <ul className={s.boxButtonAndFavorite}>
        <li>
          <button
            type="button"
            className={s.buttonLearnMore}
            onClick={
              token
                ? () => {
                    openModalFriend(id);
                  }
                : openModal
            }
          >
            Learn more
          </button>
        </li>
        {boxFavorite && (
          <li className={s.favorites}>
            {buttonFavorite ? (
              <button
                className={s.buttonFavorite}
                type="button"
                onClick={
                  token
                    ? () => {
                        handleClickDelete(id);
                      }
                    : openModal
                }
              >
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-basket`} />
                </svg>
              </button>
            ) : (
              <button
                className={s.buttonFavorite}
                type="button"
                onClick={
                  token
                    ? () => {
                        handleClickAdd(id);
                      }
                    : openModal
                }
              >
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-heart`} />
                </svg>
              </button>
            )}
          </li>
        )}
      </ul>
    </>
  );
}

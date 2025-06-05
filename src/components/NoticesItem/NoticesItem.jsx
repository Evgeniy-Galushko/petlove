import s from "./NoticesItem.module.css";
import sprite from "../../img/icon/icon-sprite.svg";
import clsx from "clsx";

export default function NoticesItem({
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
}) {
  return (
    <>
      <img src={imgURL} alt={name} width={287} />
      <h2>{title}</h2>
      <p>
        <svg className={clsx(s.icon)} width={16} height={16}>
          <use href={`${sprite}#icon-star`} />
        </svg>
        {popularity}
      </p>
      <ul>
        <li>
          <p>Name</p>
          <p>{name}</p>
        </li>
        <li>
          <p>Birthday</p>
          <p>{birthday}</p>
        </li>
        <li>
          <p>Gender</p>
          <p>{gender}</p>
        </li>
        <li>
          <p>Species</p>
          <p>{species}</p>
        </li>
        <li>
          <p>Category</p>
          <p>{category}</p>
        </li>
      </ul>
      <p>{comment}</p>
      {!price ? <p>No price</p> : <p>&#x24;{price}</p>}
      <ul>
        <li>
          <button type="button">Learn more</button>
        </li>
        <li>
          <svg className={clsx(s.icon)} width={16} height={16}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </li>
      </ul>
    </>
  );
}

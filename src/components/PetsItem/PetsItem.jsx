import s from "./PetsItem.module.css";
import sprite from "../../img/icon/icon-sprite.svg";

export default function PetsItem({
  birthday,
  createdAt,
  imgURL,
  name,
  sex,
  species,
  title,
}) {
  return (
    <ul>
      <li>
        <img src={imgURL} alt={name} className={s.imgPets} />
      </li>
      <li>
        <ul>
          <h3 className={s.title}>
            {title.length > 19 ? title.slice(0, 19) + "..." : title}
          </h3>
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
            <p>{sex}</p>
          </li>
          <li>
            <p>Species</p>
            <p>{species}</p>
          </li>
        </ul>
      </li>
      <li>
        <button type="button" className={s.buttonDdelete}>
          <svg className={s.iconDelete}>
            <use href={`${sprite}#icon-basket`} />
          </svg>
        </button>
      </li>
    </ul>
  );
}

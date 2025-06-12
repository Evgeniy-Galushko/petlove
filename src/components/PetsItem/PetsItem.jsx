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
    <ul className={s.aboutPet}>
      <li className={s.boxImg}>
        <img src={imgURL} alt={name} className={s.imgPets} />
      </li>
      <li className={s.boxTitle}>
        <h3 className={s.title}>
          {title.length > 19 ? title.slice(0, 19) + "..." : title}
        </h3>
        <ul className={s.petDescription}>
          <li>
            <p className={s.headlines}>Name</p>
            <p className={s.description}>{name}</p>
          </li>
          <li>
            <p className={s.headlines}>Birthday</p>
            <p className={s.description}>
              {birthday.slice(8, 10)}.{birthday.slice(5, 7)}.
              {birthday.slice(0, 4)}
            </p>
          </li>
          <li>
            <p className={s.headlines}>Gender</p>
            <p className={s.description}>{sex}</p>
          </li>
          <li>
            <p className={s.headlines}>Species</p>
            <p className={s.description}>{species}</p>
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

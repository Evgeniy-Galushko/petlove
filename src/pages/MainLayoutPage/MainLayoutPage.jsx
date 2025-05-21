import s from "./MainLayoutPage.module.css";
import sprite from "../../img/icon/icon-sprite.svg";

export default function MainLayoutPage() {
  return (
    <div className={s.boxImg}>
      <h1>
        petl
        <svg width={28} height={28}>
          <use href={`${sprite}#icon-heart-circle`} />
        </svg>
        ve
      </h1>
    </div>
  );
}

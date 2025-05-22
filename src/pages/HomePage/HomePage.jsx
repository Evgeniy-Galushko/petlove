import Logo from "../../components/Logo/Logo.jsx";
import sprite from "../../img/icon/icon-sprite.svg";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={s.sectionHome}>
      <ul className={s.listHome}>
        <li className={s.titleBox}>
          <ul className={s.header}>
            <li>
              <Logo style={"white"} />
            </li>
            <li className={s.boxUser}>
              <div className={s.user}>
                <svg className={s.iconUser}>
                  <use href={`${sprite}#icon-user`} />
                </svg>
                <p className={s.name}>Name</p>
              </div>
              <button className={s.menuButton}>
                <svg className={s.iconMenu}>
                  <use href={`${sprite}#icon-menu`} />
                </svg>
              </button>
            </li>
          </ul>
          <h2 className={s.title}>
            Take good <span className={s.colorTitle}>care</span> of your small
            pets
          </h2>
          <p className={s.paragraph}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </li>
        <li className={s.homeImg}></li>
      </ul>
    </section>
  );
}

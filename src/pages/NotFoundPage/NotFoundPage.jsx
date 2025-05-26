import { NavLink } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={s.notFoundPage}>
      <ul className={s.boxNotFound}>
        <li className={s.titleBox}>
          <span className={s.number}>4</span>
          <span className={s.imgBox}>
            <picture className={s.img}>
              <source
                srcSet="public/catMob404-1x.png 1x, public/catMob404-2x.png 2x"
                media="(max-width: 767px)"
              />
              <source
                srcSet="public/catTab-Pc404-1x.png 1x, public/catTab-Pc404-2x.png 2x"
                media="(min-width: 768px)"
              />
              <img src="public/catMob404-1x.png" alt="cat" />
            </picture>
          </span>
          <span className={s.number}>4</span>
        </li>
        <li>
          <p className={s.paragraph}>Ooops! This page not found :(</p>
        </li>
        <li className={s.containerLink}>
          <NavLink to="/home" className={s.linkHome}>
            To home page
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

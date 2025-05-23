import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo.jsx";

import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={s.sectionHome}>
      <ul className={s.listHome}>
        <li className={s.titleBox}>
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
      <ul>
        <li>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find pet</NavLink>
          <NavLink to="/friends">Our friends</NavLink>
        </li>
        <li></li>
      </ul>
    </section>
  );
}
